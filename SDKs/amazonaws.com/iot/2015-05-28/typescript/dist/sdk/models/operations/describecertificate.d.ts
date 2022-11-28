import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeCertificatePathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class DescribeCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeCertificateRequest extends SpeakeasyBase {
    pathParams: DescribeCertificatePathParams;
    headers: DescribeCertificateHeaders;
}
export declare class DescribeCertificateResponse extends SpeakeasyBase {
    contentType: string;
    describeCertificateResponse?: shared.DescribeCertificateResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
