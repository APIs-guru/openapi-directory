import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateBranchInput
/** 
 * Represents the input of a create branch operation.
**/
export class CreateBranchInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branchName" })
  branchName: string;

  @SpeakeasyMetadata({ data: "json, name=commitId" })
  commitId: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
