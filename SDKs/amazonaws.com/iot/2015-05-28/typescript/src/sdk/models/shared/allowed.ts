import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Policy } from "./policy";


// Allowed
/** 
 * Contains information that allowed the authorization.
**/
export class Allowed extends SpeakeasyBase {
  @Metadata({ data: "json, name=policies", elemType: shared.Policy })
  policies?: Policy[];
}
