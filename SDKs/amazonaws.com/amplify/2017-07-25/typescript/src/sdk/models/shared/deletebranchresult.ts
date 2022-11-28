import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Branch } from "./branch";



// DeleteBranchResult
/** 
 *  The result structure for the delete branch request. 
**/
export class DeleteBranchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch: Branch;
}
