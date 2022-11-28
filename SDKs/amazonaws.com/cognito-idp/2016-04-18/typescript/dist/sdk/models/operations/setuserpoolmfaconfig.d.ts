import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SetUserPoolMfaConfigXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceSetUserPoolMfaConfig = "AWSCognitoIdentityProviderService.SetUserPoolMfaConfig"
}
export declare class SetUserPoolMfaConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetUserPoolMfaConfigXAmzTargetEnum;
}
export declare class SetUserPoolMfaConfigRequest extends SpeakeasyBase {
    headers: SetUserPoolMfaConfigHeaders;
    request: shared.SetUserPoolMfaConfigRequest;
}
export declare class SetUserPoolMfaConfigResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    invalidSmsRoleAccessPolicyException?: any;
    invalidSmsRoleTrustRelationshipException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    setUserPoolMfaConfigResponse?: shared.SetUserPoolMfaConfigResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
