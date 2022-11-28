import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BranchInfo
/** 
 * Returns information about a branch.
**/
export class BranchInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branchName" })
  branchName?: string;

  @SpeakeasyMetadata({ data: "json, name=commitId" })
  commitId?: string;
}
