import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Branch } from "./branch";


// UpdateBranchResult
/** 
 *  The result structure for the update branch request. 
**/
export class UpdateBranchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch: Branch;
}
