import { SpeakeasyBase } from "../../../internal/utils";
import { CreateBackendAuthForgotPasswordConfig } from "./createbackendauthforgotpasswordconfig";
import { CreateBackendAuthMfaConfig } from "./createbackendauthmfaconfig";
import { CreateBackendAuthOAuthConfig } from "./createbackendauthoauthconfig";
import { CreateBackendAuthPasswordPolicyConfig } from "./createbackendauthpasswordpolicyconfig";
import { RequiredSignUpAttributesElementEnum } from "./requiredsignupattributeselementenum";
import { SignInMethodEnum } from "./signinmethodenum";
/**
 * Describes the Amazon Cognito user pool configuration for the auth resource to be configured for your Amplify project.
**/
export declare class CreateBackendAuthUserPoolConfig extends SpeakeasyBase {
    forgotPassword?: CreateBackendAuthForgotPasswordConfig;
    mfa?: CreateBackendAuthMfaConfig;
    oAuth?: CreateBackendAuthOAuthConfig;
    passwordPolicy?: CreateBackendAuthPasswordPolicyConfig;
    requiredSignUpAttributes: RequiredSignUpAttributesElementEnum[];
    signInMethod: SignInMethodEnum;
    userPoolName: string;
}
