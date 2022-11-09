import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetRepositoryInput
/** 
 * Represents the input of a get repository operation.
**/
export class GetRepositoryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
