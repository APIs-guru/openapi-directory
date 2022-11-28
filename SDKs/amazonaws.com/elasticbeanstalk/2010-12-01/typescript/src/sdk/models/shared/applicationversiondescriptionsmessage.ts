import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationVersionDescription } from "./applicationversiondescription";



// ApplicationVersionDescriptionsMessage
/** 
 * Result message wrapping a list of application version descriptions.
**/
export class ApplicationVersionDescriptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ApplicationVersionDescription })
  applicationVersions?: ApplicationVersionDescription[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
