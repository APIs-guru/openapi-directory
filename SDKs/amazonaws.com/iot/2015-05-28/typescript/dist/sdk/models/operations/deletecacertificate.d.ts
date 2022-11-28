import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCaCertificatePathParams extends SpeakeasyBase {
    caCertificateId: string;
}
export declare class DeleteCaCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteCaCertificateRequest extends SpeakeasyBase {
    pathParams: DeleteCaCertificatePathParams;
    headers: DeleteCaCertificateHeaders;
}
export declare class DeleteCaCertificateResponse extends SpeakeasyBase {
    certificateStateException?: any;
    contentType: string;
    deleteCaCertificateResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
