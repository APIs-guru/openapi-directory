import { SpeakeasyBase } from "../../../internal/utils";
import { BackendAuthSocialProviderConfig } from "./backendauthsocialproviderconfig";
import { BackendAuthAppleProviderConfig } from "./backendauthappleproviderconfig";
/**
 * The settings for using the social identity providers for access to your Amplify app.
**/
export declare class SocialProviderSettings extends SpeakeasyBase {
    facebook?: BackendAuthSocialProviderConfig;
    google?: BackendAuthSocialProviderConfig;
    loginWithAmazon?: BackendAuthSocialProviderConfig;
    signInWithApple?: BackendAuthAppleProviderConfig;
}
