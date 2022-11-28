import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationVersionDescription } from "./applicationversiondescription";



// ApplicationVersionDescriptionMessage
/** 
 * Result message wrapping a single description of an application version.
**/
export class ApplicationVersionDescriptionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationVersion?: ApplicationVersionDescription;
}
