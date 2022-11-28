import { SpeakeasyBase } from "../../../internal/utils";
import { OAuthGrantTypeEnum } from "./oauthgranttypeenum";
import { OAuthScopesElementEnum } from "./oauthscopeselementenum";
import { SocialProviderSettings } from "./socialprovidersettings";
/**
 * Creates the OAuth configuration for your Amplify project.
**/
export declare class CreateBackendAuthOAuthConfig extends SpeakeasyBase {
    domainPrefix?: string;
    oAuthGrantType: OAuthGrantTypeEnum;
    oAuthScopes: OAuthScopesElementEnum[];
    redirectSignInUrIs: string[];
    redirectSignOutUrIs: string[];
    socialProviderSettings?: SocialProviderSettings;
}
