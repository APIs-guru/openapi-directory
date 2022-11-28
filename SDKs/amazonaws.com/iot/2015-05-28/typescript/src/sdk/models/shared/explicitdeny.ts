import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";



// ExplicitDeny
/** 
 * Information that explicitly denies authorization.
**/
export class ExplicitDeny extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policies", elemType: Policy })
  policies?: Policy[];
}
