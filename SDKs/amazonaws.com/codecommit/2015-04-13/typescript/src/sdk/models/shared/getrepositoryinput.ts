import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetRepositoryInput
/** 
 * Represents the input of a get repository operation.
**/
export class GetRepositoryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
