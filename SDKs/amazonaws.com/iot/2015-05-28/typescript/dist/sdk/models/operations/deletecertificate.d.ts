import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCertificatePathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class DeleteCertificateQueryParams extends SpeakeasyBase {
    forceDelete?: boolean;
}
export declare class DeleteCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteCertificateRequest extends SpeakeasyBase {
    pathParams: DeleteCertificatePathParams;
    queryParams: DeleteCertificateQueryParams;
    headers: DeleteCertificateHeaders;
}
export declare class DeleteCertificateResponse extends SpeakeasyBase {
    certificateStateException?: any;
    contentType: string;
    deleteConflictException?: any;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
