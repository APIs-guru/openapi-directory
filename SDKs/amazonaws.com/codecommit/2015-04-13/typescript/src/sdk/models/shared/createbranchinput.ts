import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateBranchInput
/** 
 * Represents the input of a create branch operation.
**/
export class CreateBranchInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchName" })
  branchName: string;

  @Metadata({ data: "json, name=commitId" })
  commitId: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
