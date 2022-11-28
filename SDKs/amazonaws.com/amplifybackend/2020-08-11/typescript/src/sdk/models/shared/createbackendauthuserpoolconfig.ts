import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=ForgotPassword" })
  forgotPassword?: CreateBackendAuthForgotPasswordConfig;

  @SpeakeasyMetadata({ data: "json, name=Mfa" })
  mfa?: CreateBackendAuthMfaConfig;

  @SpeakeasyMetadata({ data: "json, name=OAuth" })
  oAuth?: CreateBackendAuthOAuthConfig;

  @SpeakeasyMetadata({ data: "json, name=PasswordPolicy" })
  passwordPolicy?: CreateBackendAuthPasswordPolicyConfig;

  @SpeakeasyMetadata({ data: "json, name=RequiredSignUpAttributes" })
  requiredSignUpAttributes: RequiredSignUpAttributesElementEnum[];

  @SpeakeasyMetadata({ data: "json, name=SignInMethod" })
  signInMethod: SignInMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=UserPoolName" })
  userPoolName: string;
}
