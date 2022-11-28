import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateRepositoryDescriptionInput
/** 
 * Represents the input of an update repository description operation.
**/
export class UpdateRepositoryDescriptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositoryDescription" })
  repositoryDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
