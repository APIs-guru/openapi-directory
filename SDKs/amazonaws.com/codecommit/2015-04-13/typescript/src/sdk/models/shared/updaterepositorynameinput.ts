import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateRepositoryNameInput
/** 
 * Represents the input of an update repository description operation.
**/
export class UpdateRepositoryNameInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newName" })
  newName: string;

  @SpeakeasyMetadata({ data: "json, name=oldName" })
  oldName: string;
}
