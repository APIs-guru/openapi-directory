import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationDescription } from "./applicationdescription";



// ApplicationDescriptionsMessage
/** 
 * Result message containing a list of application descriptions.
**/
export class ApplicationDescriptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ApplicationDescription })
  applications?: ApplicationDescription[];
}
