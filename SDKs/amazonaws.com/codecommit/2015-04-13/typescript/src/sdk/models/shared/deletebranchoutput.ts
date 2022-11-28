import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BranchInfo } from "./branchinfo";



// DeleteBranchOutput
/** 
 * Represents the output of a delete branch operation.
**/
export class DeleteBranchOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deletedBranch" })
  deletedBranch?: BranchInfo;
}
