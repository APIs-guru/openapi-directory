import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteBranchInput
/** 
 * Represents the input of a delete branch operation.
**/
export class DeleteBranchInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchName" })
  branchName: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
