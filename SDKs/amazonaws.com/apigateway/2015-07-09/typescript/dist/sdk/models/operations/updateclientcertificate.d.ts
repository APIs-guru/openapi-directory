import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateClientCertificatePathParams extends SpeakeasyBase {
    clientcertificateId: string;
}
export declare class UpdateClientCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateClientCertificateRequestBody extends SpeakeasyBase {
    patchOperations?: shared.PatchOperation[];
}
export declare class UpdateClientCertificateRequest extends SpeakeasyBase {
    pathParams: UpdateClientCertificatePathParams;
    headers: UpdateClientCertificateHeaders;
    request: UpdateClientCertificateRequestBody;
}
export declare class UpdateClientCertificateResponse extends SpeakeasyBase {
    badRequestException?: any;
    clientCertificate?: shared.ClientCertificate;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
