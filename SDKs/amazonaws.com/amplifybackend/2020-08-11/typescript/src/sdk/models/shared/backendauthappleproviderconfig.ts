import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BackendAuthAppleProviderConfig
/** 
 * Describes Apple social federation configurations for allowing your app users to sign in using OAuth.
**/
export class BackendAuthAppleProviderConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=PrivateKey" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=TeamId" })
  teamId?: string;
}
