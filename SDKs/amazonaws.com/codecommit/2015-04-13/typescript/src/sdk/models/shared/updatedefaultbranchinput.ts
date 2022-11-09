import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateDefaultBranchInput
/** 
 * Represents the input of an update default branch operation.
**/
export class UpdateDefaultBranchInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultBranchName" })
  defaultBranchName: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
