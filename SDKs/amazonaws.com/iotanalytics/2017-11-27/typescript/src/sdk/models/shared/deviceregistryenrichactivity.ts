import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceRegistryEnrichActivity
/** 
 * An activity that adds data from the IoT device registry to your message.
**/
export class DeviceRegistryEnrichActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName: string;
}
