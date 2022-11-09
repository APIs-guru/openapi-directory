import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Branch } from "./branch";


// DeleteBranchResult
/** 
 *  The result structure for the delete branch request. 
**/
export class DeleteBranchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch: Branch;
}
