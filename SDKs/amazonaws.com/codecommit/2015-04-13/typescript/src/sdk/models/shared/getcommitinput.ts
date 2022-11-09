import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetCommitInput
/** 
 * Represents the input of a get commit operation.
**/
export class GetCommitInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitId" })
  commitId: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
