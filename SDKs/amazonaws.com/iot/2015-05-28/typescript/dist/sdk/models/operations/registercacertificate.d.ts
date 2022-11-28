import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegisterCaCertificateQueryParams extends SpeakeasyBase {
    allowAutoRegistration?: boolean;
    setAsActive?: boolean;
}
export declare class RegisterCaCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The registration configuration.
**/
export declare class RegisterCaCertificateRequestBodyRegistrationConfig extends SpeakeasyBase {
    roleArn?: string;
    templateBody?: string;
}
export declare class RegisterCaCertificateRequestBody extends SpeakeasyBase {
    caCertificate: string;
    registrationConfig?: RegisterCaCertificateRequestBodyRegistrationConfig;
    tags?: shared.Tag[];
    verificationCertificate: string;
}
export declare class RegisterCaCertificateRequest extends SpeakeasyBase {
    queryParams: RegisterCaCertificateQueryParams;
    headers: RegisterCaCertificateHeaders;
    request: RegisterCaCertificateRequestBody;
}
export declare class RegisterCaCertificateResponse extends SpeakeasyBase {
    certificateValidationException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    registerCaCertificateResponse?: shared.RegisterCaCertificateResponse;
    registrationCodeValidationException?: any;
    resourceAlreadyExistsException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
