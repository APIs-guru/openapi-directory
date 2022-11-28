import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeCaCertificatePathParams extends SpeakeasyBase {
    caCertificateId: string;
}
export declare class DescribeCaCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeCaCertificateRequest extends SpeakeasyBase {
    pathParams: DescribeCaCertificatePathParams;
    headers: DescribeCaCertificateHeaders;
}
export declare class DescribeCaCertificateResponse extends SpeakeasyBase {
    contentType: string;
    describeCaCertificateResponse?: shared.DescribeCaCertificateResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
