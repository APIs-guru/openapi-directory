import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminSetUserMfaPreferenceXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminSetUserMfaPreference = "AWSCognitoIdentityProviderService.AdminSetUserMFAPreference"
}
export declare class AdminSetUserMfaPreferenceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminSetUserMfaPreferenceXAmzTargetEnum;
}
export declare class AdminSetUserMfaPreferenceRequest extends SpeakeasyBase {
    headers: AdminSetUserMfaPreferenceHeaders;
    request: shared.AdminSetUserMfaPreferenceRequest;
}
export declare class AdminSetUserMfaPreferenceResponse extends SpeakeasyBase {
    adminSetUserMfaPreferenceResponse?: Map<string, any>;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    passwordResetRequiredException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    userNotConfirmedException?: any;
    userNotFoundException?: any;
}
