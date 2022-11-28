import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";



// ImplicitDeny
/** 
 * Information that implicitly denies authorization. When policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny.
**/
export class ImplicitDeny extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policies", elemType: Policy })
  policies?: Policy[];
}
