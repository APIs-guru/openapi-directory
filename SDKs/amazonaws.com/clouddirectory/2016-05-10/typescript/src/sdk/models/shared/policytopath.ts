import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyAttachment } from "./policyattachment";



// PolicyToPath
/** 
 * Used when a regular object exists in a <a>Directory</a> and you want to find all of the policies that are associated with that object and the parent to that object.
**/
export class PolicyToPath extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=Policies", elemType: PolicyAttachment })
  policies?: PolicyAttachment[];
}
