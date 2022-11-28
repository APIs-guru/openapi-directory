import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateKeysAndCertificateQueryParams extends SpeakeasyBase {
    setAsActive?: boolean;
}
export declare class CreateKeysAndCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateKeysAndCertificateRequest extends SpeakeasyBase {
    queryParams: CreateKeysAndCertificateQueryParams;
    headers: CreateKeysAndCertificateHeaders;
}
export declare class CreateKeysAndCertificateResponse extends SpeakeasyBase {
    contentType: string;
    createKeysAndCertificateResponse?: shared.CreateKeysAndCertificateResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
