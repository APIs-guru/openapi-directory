import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentityProviderConfig
/** 
 * An object representing an identity provider configuration.
**/
export class IdentityProviderConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
