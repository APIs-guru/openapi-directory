import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IotEventsDestinationConfiguration
/** 
 * Configuration information for delivery of dataset contents to IoT Events.
**/
export class IotEventsDestinationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputName" })
  inputName: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}
