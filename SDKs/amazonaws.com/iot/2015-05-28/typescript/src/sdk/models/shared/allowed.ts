import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";



// Allowed
/** 
 * Contains information that allowed the authorization.
**/
export class Allowed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policies", elemType: Policy })
  policies?: Policy[];
}
