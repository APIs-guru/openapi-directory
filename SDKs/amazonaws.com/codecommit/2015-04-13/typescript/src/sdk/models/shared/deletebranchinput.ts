import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteBranchInput
/** 
 * Represents the input of a delete branch operation.
**/
export class DeleteBranchInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branchName" })
  branchName: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
