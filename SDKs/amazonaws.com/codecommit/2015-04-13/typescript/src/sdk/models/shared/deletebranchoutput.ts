import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BranchInfo } from "./branchinfo";


// DeleteBranchOutput
/** 
 * Represents the output of a delete branch operation.
**/
export class DeleteBranchOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deletedBranch" })
  deletedBranch?: BranchInfo;
}
