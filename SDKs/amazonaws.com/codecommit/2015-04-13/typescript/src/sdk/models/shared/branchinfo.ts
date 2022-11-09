import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BranchInfo
/** 
 * Returns information about a branch.
**/
export class BranchInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchName" })
  branchName?: string;

  @Metadata({ data: "json, name=commitId" })
  commitId?: string;
}
