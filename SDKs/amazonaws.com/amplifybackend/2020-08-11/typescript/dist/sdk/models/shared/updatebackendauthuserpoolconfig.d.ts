import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateBackendAuthForgotPasswordConfig } from "./updatebackendauthforgotpasswordconfig";
import { UpdateBackendAuthMfaConfig } from "./updatebackendauthmfaconfig";
import { UpdateBackendAuthOAuthConfig } from "./updatebackendauthoauthconfig";
import { UpdateBackendAuthPasswordPolicyConfig } from "./updatebackendauthpasswordpolicyconfig";
/**
 * Describes the Amazon Cognito user pool configuration for the authorization resource to be configured for your Amplify project on an update.
**/
export declare class UpdateBackendAuthUserPoolConfig extends SpeakeasyBase {
    forgotPassword?: UpdateBackendAuthForgotPasswordConfig;
    mfa?: UpdateBackendAuthMfaConfig;
    oAuth?: UpdateBackendAuthOAuthConfig;
    passwordPolicy?: UpdateBackendAuthPasswordPolicyConfig;
}
