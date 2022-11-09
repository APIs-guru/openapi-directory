import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyAttachment } from "./policyattachment";


// PolicyToPath
/** 
 * Used when a regular object exists in a <a>Directory</a> and you want to find all of the policies that are associated with that object and the parent to that object.
**/
export class PolicyToPath extends SpeakeasyBase {
  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=Policies", elemType: shared.PolicyAttachment })
  policies?: PolicyAttachment[];
}
