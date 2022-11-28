import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegisterCertificateWithoutCaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum RegisterCertificateWithoutCaRequestBodyStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Revoked = "REVOKED",
    PendingTransfer = "PENDING_TRANSFER",
    RegisterInactive = "REGISTER_INACTIVE",
    PendingActivation = "PENDING_ACTIVATION"
}
export declare class RegisterCertificateWithoutCaRequestBody extends SpeakeasyBase {
    certificatePem: string;
    status?: RegisterCertificateWithoutCaRequestBodyStatusEnum;
}
export declare class RegisterCertificateWithoutCaRequest extends SpeakeasyBase {
    headers: RegisterCertificateWithoutCaHeaders;
    request: RegisterCertificateWithoutCaRequestBody;
}
export declare class RegisterCertificateWithoutCaResponse extends SpeakeasyBase {
    certificateStateException?: any;
    certificateValidationException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    registerCertificateWithoutCaResponse?: shared.RegisterCertificateWithoutCaResponse;
    resourceAlreadyExistsException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
