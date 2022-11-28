import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDomainConfigurationPathParams extends SpeakeasyBase {
    domainConfigurationName: string;
}
export declare class CreateDomainConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object that specifies the authorization service for a domain.
**/
export declare class CreateDomainConfigurationRequestBodyAuthorizerConfig extends SpeakeasyBase {
    allowAuthorizerOverride?: boolean;
    defaultAuthorizerName?: string;
}
export declare enum CreateDomainConfigurationRequestBodyServiceTypeEnum {
    Data = "DATA",
    CredentialProvider = "CREDENTIAL_PROVIDER",
    Jobs = "JOBS"
}
export declare class CreateDomainConfigurationRequestBody extends SpeakeasyBase {
    authorizerConfig?: CreateDomainConfigurationRequestBodyAuthorizerConfig;
    domainName?: string;
    serverCertificateArns?: string[];
    serviceType?: CreateDomainConfigurationRequestBodyServiceTypeEnum;
    tags?: shared.Tag[];
    validationCertificateArn?: string;
}
export declare class CreateDomainConfigurationRequest extends SpeakeasyBase {
    pathParams: CreateDomainConfigurationPathParams;
    headers: CreateDomainConfigurationHeaders;
    request: CreateDomainConfigurationRequestBody;
}
export declare class CreateDomainConfigurationResponse extends SpeakeasyBase {
    certificateValidationException?: any;
    contentType: string;
    createDomainConfigurationResponse?: shared.CreateDomainConfigurationResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
