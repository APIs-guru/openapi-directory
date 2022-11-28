import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SetUserSettingsXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceSetUserSettings = "AWSCognitoIdentityProviderService.SetUserSettings"
}
export declare class SetUserSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetUserSettingsXAmzTargetEnum;
}
export declare class SetUserSettingsRequest extends SpeakeasyBase {
    headers: SetUserSettingsHeaders;
    request: shared.SetUserSettingsRequest;
}
export declare class SetUserSettingsResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    passwordResetRequiredException?: any;
    resourceNotFoundException?: any;
    setUserSettingsResponse?: Map<string, any>;
    statusCode: number;
    userNotConfirmedException?: any;
    userNotFoundException?: any;
}
