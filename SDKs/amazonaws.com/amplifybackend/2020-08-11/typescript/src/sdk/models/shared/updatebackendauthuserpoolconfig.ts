import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateBackendAuthForgotPasswordConfig } from "./updatebackendauthforgotpasswordconfig";
import { UpdateBackendAuthMfaConfig } from "./updatebackendauthmfaconfig";
import { UpdateBackendAuthOAuthConfig } from "./updatebackendauthoauthconfig";
import { UpdateBackendAuthPasswordPolicyConfig } from "./updatebackendauthpasswordpolicyconfig";



// UpdateBackendAuthUserPoolConfig
/** 
 * Describes the Amazon Cognito user pool configuration for the authorization resource to be configured for your Amplify project on an update.
**/
export class UpdateBackendAuthUserPoolConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ForgotPassword" })
  forgotPassword?: UpdateBackendAuthForgotPasswordConfig;

  @SpeakeasyMetadata({ data: "json, name=Mfa" })
  mfa?: UpdateBackendAuthMfaConfig;

  @SpeakeasyMetadata({ data: "json, name=OAuth" })
  oAuth?: UpdateBackendAuthOAuthConfig;

  @SpeakeasyMetadata({ data: "json, name=PasswordPolicy" })
  passwordPolicy?: UpdateBackendAuthPasswordPolicyConfig;
}
