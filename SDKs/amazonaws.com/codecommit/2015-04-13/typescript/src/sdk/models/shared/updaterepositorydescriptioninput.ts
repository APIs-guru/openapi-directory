import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateRepositoryDescriptionInput
/** 
 * Represents the input of an update repository description operation.
**/
export class UpdateRepositoryDescriptionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositoryDescription" })
  repositoryDescription?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
