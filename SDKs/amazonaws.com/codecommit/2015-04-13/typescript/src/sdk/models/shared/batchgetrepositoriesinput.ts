import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchGetRepositoriesInput
/** 
 * Represents the input of a batch get repositories operation.
**/
export class BatchGetRepositoriesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositoryNames" })
  repositoryNames: string[];
}
