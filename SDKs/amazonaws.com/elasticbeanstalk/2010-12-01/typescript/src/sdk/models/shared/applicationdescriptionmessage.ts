import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationDescription } from "./applicationdescription";



// ApplicationDescriptionMessage
/** 
 * Result message containing a single description of an application.
**/
export class ApplicationDescriptionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  application?: ApplicationDescription;
}
