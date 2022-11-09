import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateBackendAuthForgotPasswordConfig } from "./createbackendauthforgotpasswordconfig";
import { CreateBackendAuthMfaConfig } from "./createbackendauthmfaconfig";
import { CreateBackendAuthOAuthConfig } from "./createbackendauthoauthconfig";
import { CreateBackendAuthPasswordPolicyConfig } from "./createbackendauthpasswordpolicyconfig";
import { RequiredSignUpAttributesElementEnum } from "./requiredsignupattributeselementenum";
import { SignInMethodEnum } from "./signinmethodenum";


// CreateBackendAuthUserPoolConfig
/** 
 * Describes the Amazon Cognito user pool configuration for the auth resource to be configured for your Amplify project.
**/
export class CreateBackendAuthUserPoolConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ForgotPassword" })
  forgotPassword?: CreateBackendAuthForgotPasswordConfig;

  @Metadata({ data: "json, name=Mfa" })
  mfa?: CreateBackendAuthMfaConfig;

  @Metadata({ data: "json, name=OAuth" })
  oAuth?: CreateBackendAuthOAuthConfig;

  @Metadata({ data: "json, name=PasswordPolicy" })
  passwordPolicy?: CreateBackendAuthPasswordPolicyConfig;

  @Metadata({ data: "json, name=RequiredSignUpAttributes" })
  requiredSignUpAttributes: RequiredSignUpAttributesElementEnum[];

  @Metadata({ data: "json, name=SignInMethod" })
  signInMethod: SignInMethodEnum;

  @Metadata({ data: "json, name=UserPoolName" })
  userPoolName: string;
}
