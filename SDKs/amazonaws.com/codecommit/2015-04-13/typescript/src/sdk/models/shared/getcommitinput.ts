import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetCommitInput
/** 
 * Represents the input of a get commit operation.
**/
export class GetCommitInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitId" })
  commitId: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
