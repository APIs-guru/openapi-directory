import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TransferCertificatePathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class TransferCertificateQueryParams extends SpeakeasyBase {
    targetAwsAccount: string;
}
export declare class TransferCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TransferCertificateRequestBody extends SpeakeasyBase {
    transferMessage?: string;
}
export declare class TransferCertificateRequest extends SpeakeasyBase {
    pathParams: TransferCertificatePathParams;
    queryParams: TransferCertificateQueryParams;
    headers: TransferCertificateHeaders;
    request: TransferCertificateRequestBody;
}
export declare class TransferCertificateResponse extends SpeakeasyBase {
    certificateStateException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    transferCertificateResponse?: shared.TransferCertificateResponse;
    transferConflictException?: any;
    unauthorizedException?: any;
}
