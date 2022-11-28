import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDomainConfigurationPathParams extends SpeakeasyBase {
    domainConfigurationName: string;
}
export declare class UpdateDomainConfigurationHeaders extends SpeakeasyBase {
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
export declare class UpdateDomainConfigurationRequestBodyAuthorizerConfig extends SpeakeasyBase {
    allowAuthorizerOverride?: boolean;
    defaultAuthorizerName?: string;
}
export declare enum UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class UpdateDomainConfigurationRequestBody extends SpeakeasyBase {
    authorizerConfig?: UpdateDomainConfigurationRequestBodyAuthorizerConfig;
    domainConfigurationStatus?: UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum;
    removeAuthorizerConfig?: boolean;
}
export declare class UpdateDomainConfigurationRequest extends SpeakeasyBase {
    pathParams: UpdateDomainConfigurationPathParams;
    headers: UpdateDomainConfigurationHeaders;
    request: UpdateDomainConfigurationRequestBody;
}
export declare class UpdateDomainConfigurationResponse extends SpeakeasyBase {
    certificateValidationException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
    updateDomainConfigurationResponse?: shared.UpdateDomainConfigurationResponse;
}
