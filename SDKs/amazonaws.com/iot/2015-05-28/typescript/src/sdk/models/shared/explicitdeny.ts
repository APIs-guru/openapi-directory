import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Policy } from "./policy";


// ExplicitDeny
/** 
 * Information that explicitly denies authorization.
**/
export class ExplicitDeny extends SpeakeasyBase {
  @Metadata({ data: "json, name=policies", elemType: shared.Policy })
  policies?: Policy[];
}
