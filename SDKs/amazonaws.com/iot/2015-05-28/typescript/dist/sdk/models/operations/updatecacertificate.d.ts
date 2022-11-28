import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateCaCertificatePathParams extends SpeakeasyBase {
    caCertificateId: string;
}
export declare enum UpdateCaCertificateNewAutoRegistrationStatusEnum {
    Enable = "ENABLE",
    Disable = "DISABLE"
}
export declare enum UpdateCaCertificateNewStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
export declare class UpdateCaCertificateQueryParams extends SpeakeasyBase {
    newAutoRegistrationStatus?: UpdateCaCertificateNewAutoRegistrationStatusEnum;
    newStatus?: UpdateCaCertificateNewStatusEnum;
}
export declare class UpdateCaCertificateHeaders extends SpeakeasyBase {
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
export declare class UpdateCaCertificateRequestBodyRegistrationConfig extends SpeakeasyBase {
    roleArn?: string;
    templateBody?: string;
}
export declare class UpdateCaCertificateRequestBody extends SpeakeasyBase {
    registrationConfig?: UpdateCaCertificateRequestBodyRegistrationConfig;
    removeAutoRegistration?: boolean;
}
export declare class UpdateCaCertificateRequest extends SpeakeasyBase {
    pathParams: UpdateCaCertificatePathParams;
    queryParams: UpdateCaCertificateQueryParams;
    headers: UpdateCaCertificateHeaders;
    request: UpdateCaCertificateRequestBody;
}
export declare class UpdateCaCertificateResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
