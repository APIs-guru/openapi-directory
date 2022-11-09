import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceShadowEnrichActivity
/** 
 * An activity that adds information from the IoT Device Shadow service to a message.
**/
export class DeviceShadowEnrichActivity extends SpeakeasyBase {
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
