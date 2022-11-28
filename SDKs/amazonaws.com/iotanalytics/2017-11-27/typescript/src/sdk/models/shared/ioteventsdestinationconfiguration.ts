import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IotEventsDestinationConfiguration
/** 
 * Configuration information for delivery of dataset contents to IoT Events.
**/
export class IotEventsDestinationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputName" })
  inputName: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}
