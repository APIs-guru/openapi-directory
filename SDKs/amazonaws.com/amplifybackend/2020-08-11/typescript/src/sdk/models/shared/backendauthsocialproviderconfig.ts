import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BackendAuthSocialProviderConfig
/** 
 * Describes third-party social federation configurations for allowing your app users to sign in using OAuth.
**/
export class BackendAuthSocialProviderConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientId" })
  clientId?: string;

  @Metadata({ data: "json, name=ClientSecret" })
  clientSecret?: string;
}
