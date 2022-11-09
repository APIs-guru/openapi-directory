import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentityProviderConfig
/** 
 * An object representing an identity provider configuration.
**/
export class IdentityProviderConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
