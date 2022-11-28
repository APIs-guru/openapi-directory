import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Branch } from "./branch";



// UpdateBranchResult
/** 
 *  The result structure for the update branch request. 
**/
export class UpdateBranchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch: Branch;
}
