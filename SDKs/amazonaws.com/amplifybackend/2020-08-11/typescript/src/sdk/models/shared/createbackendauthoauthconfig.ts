import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OAuthGrantTypeEnum } from "./oauthgranttypeenum";
import { OAuthScopesElementEnum } from "./oauthscopeselementenum";
import { SocialProviderSettings } from "./socialprovidersettings";



// CreateBackendAuthOAuthConfig
/** 
 * Creates the OAuth configuration for your Amplify project.
**/
export class CreateBackendAuthOAuthConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainPrefix" })
  domainPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=OAuthGrantType" })
  oAuthGrantType: OAuthGrantTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=OAuthScopes" })
  oAuthScopes: OAuthScopesElementEnum[];

  @SpeakeasyMetadata({ data: "json, name=RedirectSignInURIs" })
  redirectSignInUrIs: string[];

  @SpeakeasyMetadata({ data: "json, name=RedirectSignOutURIs" })
  redirectSignOutUrIs: string[];

  @SpeakeasyMetadata({ data: "json, name=SocialProviderSettings" })
  socialProviderSettings?: SocialProviderSettings;
}
