import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BranchInfo } from "./branchinfo";



// GetBranchOutput
/** 
 * Represents the output of a get branch operation.
**/
export class GetBranchOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: BranchInfo;
}
