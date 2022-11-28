import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackendAuthSocialProviderConfig } from "./backendauthsocialproviderconfig";
import { BackendAuthAppleProviderConfig } from "./backendauthappleproviderconfig";



// SocialProviderSettings
/** 
 * The settings for using the social identity providers for access to your Amplify app.
**/
export class SocialProviderSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Facebook" })
  facebook?: BackendAuthSocialProviderConfig;

  @SpeakeasyMetadata({ data: "json, name=Google" })
  google?: BackendAuthSocialProviderConfig;

  @SpeakeasyMetadata({ data: "json, name=LoginWithAmazon" })
  loginWithAmazon?: BackendAuthSocialProviderConfig;

  @SpeakeasyMetadata({ data: "json, name=SignInWithApple" })
  signInWithApple?: BackendAuthAppleProviderConfig;
}
