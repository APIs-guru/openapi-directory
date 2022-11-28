import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BackendAuthSocialProviderConfig
/** 
 * Describes third-party social federation configurations for allowing your app users to sign in using OAuth.
**/
export class BackendAuthSocialProviderConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientSecret" })
  clientSecret?: string;
}
