import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetBranchInput
/** 
 * Represents the input of a get branch operation.
**/
export class GetBranchInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branchName" })
  branchName?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
