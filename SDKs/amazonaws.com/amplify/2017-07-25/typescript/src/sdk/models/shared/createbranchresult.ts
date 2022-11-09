import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Branch } from "./branch";


// CreateBranchResult
/** 
 *  The result structure for create branch request. 
**/
export class CreateBranchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch: Branch;
}
