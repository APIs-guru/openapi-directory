import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LinkNameAlreadyInUseException
/** 
 * Indicates that a link could not be created due to a naming conflict. Choose a different name and then try again.
**/
export class LinkNameAlreadyInUseException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
