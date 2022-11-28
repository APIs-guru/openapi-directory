import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateDefaultBranchInput
/** 
 * Represents the input of an update default branch operation.
**/
export class UpdateDefaultBranchInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultBranchName" })
  defaultBranchName: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
