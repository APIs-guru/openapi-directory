import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Oidc } from "./oidc";


// Identity
/** 
 * An object representing an identity provider.
**/
export class Identity extends SpeakeasyBase {
  @Metadata({ data: "json, name=oidc" })
  oidc?: Oidc;
}
