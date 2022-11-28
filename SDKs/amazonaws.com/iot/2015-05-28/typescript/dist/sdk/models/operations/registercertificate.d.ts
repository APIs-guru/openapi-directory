import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegisterCertificateQueryParams extends SpeakeasyBase {
    setAsActive?: boolean;
}
export declare class RegisterCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum RegisterCertificateRequestBodyStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Revoked = "REVOKED",
    PendingTransfer = "PENDING_TRANSFER",
    RegisterInactive = "REGISTER_INACTIVE",
    PendingActivation = "PENDING_ACTIVATION"
}
export declare class RegisterCertificateRequestBody extends SpeakeasyBase {
    caCertificatePem?: string;
    certificatePem: string;
    status?: RegisterCertificateRequestBodyStatusEnum;
}
export declare class RegisterCertificateRequest extends SpeakeasyBase {
    queryParams: RegisterCertificateQueryParams;
    headers: RegisterCertificateHeaders;
    request: RegisterCertificateRequestBody;
}
export declare class RegisterCertificateResponse extends SpeakeasyBase {
    certificateConflictException?: any;
    certificateStateException?: any;
    certificateValidationException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    registerCertificateResponse?: shared.RegisterCertificateResponse;
    resourceAlreadyExistsException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
