import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DirectoryAlreadyExistsException
/** 
 * Indicates that a <a>Directory</a> could not be created due to a naming conflict. Choose a different name and try again.
**/
export class DirectoryAlreadyExistsException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
