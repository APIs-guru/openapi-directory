import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateRepositoryNameInput
/** 
 * Represents the input of an update repository description operation.
**/
export class UpdateRepositoryNameInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=newName" })
  newName: string;

  @Metadata({ data: "json, name=oldName" })
  oldName: string;
}
