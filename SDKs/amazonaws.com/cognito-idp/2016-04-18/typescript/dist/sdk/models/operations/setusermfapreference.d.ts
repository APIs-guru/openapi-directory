import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SetUserMfaPreferenceXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceSetUserMfaPreference = "AWSCognitoIdentityProviderService.SetUserMFAPreference"
}
export declare class SetUserMfaPreferenceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetUserMfaPreferenceXAmzTargetEnum;
}
export declare class SetUserMfaPreferenceRequest extends SpeakeasyBase {
    headers: SetUserMfaPreferenceHeaders;
    request: shared.SetUserMfaPreferenceRequest;
}
export declare class SetUserMfaPreferenceResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    passwordResetRequiredException?: any;
    resourceNotFoundException?: any;
    setUserMfaPreferenceResponse?: Map<string, any>;
    statusCode: number;
    userNotConfirmedException?: any;
    userNotFoundException?: any;
}
