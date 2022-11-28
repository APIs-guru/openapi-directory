import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateRepositoryInput
/** 
 * Represents the input of a create repository operation.
**/
export class CreateRepositoryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositoryDescription" })
  repositoryDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
