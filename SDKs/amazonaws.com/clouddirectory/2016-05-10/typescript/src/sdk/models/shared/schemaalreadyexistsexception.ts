import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SchemaAlreadyExistsException
/** 
 * Indicates that a schema could not be created due to a naming conflict. Please select a different name and then try again.
**/
export class SchemaAlreadyExistsException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
