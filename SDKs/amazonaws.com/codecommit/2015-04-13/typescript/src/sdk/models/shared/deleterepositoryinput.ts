import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteRepositoryInput
/** 
 * Represents the input of a delete repository operation.
**/
export class DeleteRepositoryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
