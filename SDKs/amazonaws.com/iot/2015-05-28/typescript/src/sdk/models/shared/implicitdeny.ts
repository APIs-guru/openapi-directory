import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Policy } from "./policy";


// ImplicitDeny
/** 
 * Information that implicitly denies authorization. When policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny.
**/
export class ImplicitDeny extends SpeakeasyBase {
  @Metadata({ data: "json, name=policies", elemType: shared.Policy })
  policies?: Policy[];
}
