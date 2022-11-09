import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceRegistryEnrichActivity
/** 
 * An activity that adds data from the IoT device registry to your message.
**/
export class DeviceRegistryEnrichActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute" })
  attribute: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=thingName" })
  thingName: string;
}
