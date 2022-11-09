import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetClientCertificatePathParams extends SpeakeasyBase {
    clientcertificateId: string;
}
export declare class GetClientCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetClientCertificateRequest extends SpeakeasyBase {
    pathParams: GetClientCertificatePathParams;
    headers: GetClientCertificateHeaders;
}
export declare class GetClientCertificateResponse extends SpeakeasyBase {
    badRequestException?: any;
    clientCertificate?: shared.ClientCertificate;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
