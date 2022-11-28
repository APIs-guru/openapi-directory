import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SetRiskConfigurationXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceSetRiskConfiguration = "AWSCognitoIdentityProviderService.SetRiskConfiguration"
}
export declare class SetRiskConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetRiskConfigurationXAmzTargetEnum;
}
export declare class SetRiskConfigurationRequest extends SpeakeasyBase {
    headers: SetRiskConfigurationHeaders;
    request: shared.SetRiskConfigurationRequest;
}
export declare class SetRiskConfigurationResponse extends SpeakeasyBase {
    codeDeliveryFailureException?: any;
    contentType: string;
    internalErrorException?: any;
    invalidEmailRoleAccessPolicyException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    setRiskConfigurationResponse?: shared.SetRiskConfigurationResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    userPoolAddOnNotEnabledException?: any;
}
