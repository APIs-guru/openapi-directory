import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceShadowEnrichActivity
/** 
 * An activity that adds information from the IoT Device Shadow service to a message.
**/
export class DeviceShadowEnrichActivity extends SpeakeasyBase {
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
