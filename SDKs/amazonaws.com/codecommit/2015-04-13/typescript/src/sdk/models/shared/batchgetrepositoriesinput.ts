import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchGetRepositoriesInput
/** 
 * Represents the input of a batch get repositories operation.
**/
export class BatchGetRepositoriesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositoryNames" })
  repositoryNames: string[];
}
