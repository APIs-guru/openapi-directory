import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Branch } from "./branch";



// CreateBranchResult
/** 
 *  The result structure for create branch request. 
**/
export class CreateBranchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch: Branch;
}
