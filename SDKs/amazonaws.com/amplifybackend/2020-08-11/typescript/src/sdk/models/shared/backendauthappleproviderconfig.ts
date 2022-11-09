import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BackendAuthAppleProviderConfig
/** 
 * Describes Apple social federation configurations for allowing your app users to sign in using OAuth.
**/
export class BackendAuthAppleProviderConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientId" })
  clientId?: string;

  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;

  @Metadata({ data: "json, name=PrivateKey" })
  privateKey?: string;

  @Metadata({ data: "json, name=TeamId" })
  teamId?: string;
}
