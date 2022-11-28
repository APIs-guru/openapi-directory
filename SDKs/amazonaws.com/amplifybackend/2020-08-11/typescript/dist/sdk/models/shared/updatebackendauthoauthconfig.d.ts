import { SpeakeasyBase } from "../../../internal/utils";
import { OAuthGrantTypeEnum } from "./oauthgranttypeenum";
import { OAuthScopesElementEnum } from "./oauthscopeselementenum";
import { SocialProviderSettings } from "./socialprovidersettings";
/**
 * The OAuth configurations for authenticating users into your Amplify app.
**/
export declare class UpdateBackendAuthOAuthConfig extends SpeakeasyBase {
    domainPrefix?: string;
    oAuthGrantType?: OAuthGrantTypeEnum;
    oAuthScopes?: OAuthScopesElementEnum[];
    redirectSignInUrIs?: string[];
    redirectSignOutUrIs?: string[];
    socialProviderSettings?: SocialProviderSettings;
}
