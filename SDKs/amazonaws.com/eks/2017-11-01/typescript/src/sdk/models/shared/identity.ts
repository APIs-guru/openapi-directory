import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Oidc } from "./oidc";



// Identity
/** 
 * An object representing an identity provider.
**/
export class Identity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oidc" })
  oidc?: Oidc;
}
