import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetBranchInput
/** 
 * Represents the input of a get branch operation.
**/
export class GetBranchInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchName" })
  branchName?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
