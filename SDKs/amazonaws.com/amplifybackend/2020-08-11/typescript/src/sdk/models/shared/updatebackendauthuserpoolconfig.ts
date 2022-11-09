import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateBackendAuthForgotPasswordConfig } from "./updatebackendauthforgotpasswordconfig";
import { UpdateBackendAuthMfaConfig } from "./updatebackendauthmfaconfig";
import { UpdateBackendAuthOAuthConfig } from "./updatebackendauthoauthconfig";
import { UpdateBackendAuthPasswordPolicyConfig } from "./updatebackendauthpasswordpolicyconfig";


// UpdateBackendAuthUserPoolConfig
/** 
 * Describes the Amazon Cognito user pool configuration for the authorization resource to be configured for your Amplify project on an update.
**/
export class UpdateBackendAuthUserPoolConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ForgotPassword" })
  forgotPassword?: UpdateBackendAuthForgotPasswordConfig;

  @Metadata({ data: "json, name=Mfa" })
  mfa?: UpdateBackendAuthMfaConfig;

  @Metadata({ data: "json, name=OAuth" })
  oAuth?: UpdateBackendAuthOAuthConfig;

  @Metadata({ data: "json, name=PasswordPolicy" })
  passwordPolicy?: UpdateBackendAuthPasswordPolicyConfig;
}
