import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BranchInfo } from "./branchinfo";


// GetBranchOutput
/** 
 * Represents the output of a get branch operation.
**/
export class GetBranchOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: BranchInfo;
}
