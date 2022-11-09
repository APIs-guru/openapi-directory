import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateRepositoryInput
/** 
 * Represents the input of a create repository operation.
**/
export class CreateRepositoryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositoryDescription" })
  repositoryDescription?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
