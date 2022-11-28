import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateCertificatePathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare enum UpdateCertificateNewStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Revoked = "REVOKED",
    PendingTransfer = "PENDING_TRANSFER",
    RegisterInactive = "REGISTER_INACTIVE",
    PendingActivation = "PENDING_ACTIVATION"
}
export declare class UpdateCertificateQueryParams extends SpeakeasyBase {
    newStatus: UpdateCertificateNewStatusEnum;
}
export declare class UpdateCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateCertificateRequest extends SpeakeasyBase {
    pathParams: UpdateCertificatePathParams;
    queryParams: UpdateCertificateQueryParams;
    headers: UpdateCertificateHeaders;
}
export declare class UpdateCertificateResponse extends SpeakeasyBase {
    certificateStateException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
