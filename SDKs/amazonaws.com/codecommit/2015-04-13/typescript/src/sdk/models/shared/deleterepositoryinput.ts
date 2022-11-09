import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteRepositoryInput
/** 
 * Represents the input of a delete repository operation.
**/
export class DeleteRepositoryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
