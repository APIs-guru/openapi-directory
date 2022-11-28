import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteClientCertificatePathParams extends SpeakeasyBase {
    clientcertificateId: string;
}
export declare class DeleteClientCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteClientCertificateRequest extends SpeakeasyBase {
    pathParams: DeleteClientCertificatePathParams;
    headers: DeleteClientCertificateHeaders;
}
export declare class DeleteClientCertificateResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
