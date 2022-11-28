import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DirectoryAlreadyExistsException
/** 
 * Indicates that a <a>Directory</a> could not be created due to a naming conflict. Choose a different name and try again.
**/
export class DirectoryAlreadyExistsException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
