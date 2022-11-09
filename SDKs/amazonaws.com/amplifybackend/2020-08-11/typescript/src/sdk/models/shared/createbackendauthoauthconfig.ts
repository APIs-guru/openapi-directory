import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OAuthGrantTypeEnum } from "./oauthgranttypeenum";
import { OAuthScopesElementEnum } from "./oauthscopeselementenum";
import { SocialProviderSettings } from "./socialprovidersettings";


// CreateBackendAuthOAuthConfig
/** 
 * Creates the OAuth configuration for your Amplify project.
**/
export class CreateBackendAuthOAuthConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainPrefix" })
  domainPrefix?: string;

  @Metadata({ data: "json, name=OAuthGrantType" })
  oAuthGrantType: OAuthGrantTypeEnum;

  @Metadata({ data: "json, name=OAuthScopes" })
  oAuthScopes: OAuthScopesElementEnum[];

  @Metadata({ data: "json, name=RedirectSignInURIs" })
  redirectSignInUrIs: string[];

  @Metadata({ data: "json, name=RedirectSignOutURIs" })
  redirectSignOutUrIs: string[];

  @Metadata({ data: "json, name=SocialProviderSettings" })
  socialProviderSettings?: SocialProviderSettings;
}
