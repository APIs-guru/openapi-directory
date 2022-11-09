import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackendAuthSocialProviderConfig } from "./backendauthsocialproviderconfig";
import { BackendAuthSocialProviderConfig } from "./backendauthsocialproviderconfig";
import { BackendAuthSocialProviderConfig } from "./backendauthsocialproviderconfig";
import { BackendAuthAppleProviderConfig } from "./backendauthappleproviderconfig";


// SocialProviderSettings
/** 
 * The settings for using the social identity providers for access to your Amplify app.
**/
export class SocialProviderSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=Facebook" })
  facebook?: BackendAuthSocialProviderConfig;

  @Metadata({ data: "json, name=Google" })
  google?: BackendAuthSocialProviderConfig;

  @Metadata({ data: "json, name=LoginWithAmazon" })
  loginWithAmazon?: BackendAuthSocialProviderConfig;

  @Metadata({ data: "json, name=SignInWithApple" })
  signInWithApple?: BackendAuthAppleProviderConfig;
}
