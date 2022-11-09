import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Payload } from "./payload";


// IotTopicPublishAction
/** 
 * Information required to publish the MQTT message through the AWS IoT message broker.
**/
export class IotTopicPublishAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=mqttTopic" })
  mqttTopic: string;

  @Metadata({ data: "json, name=payload" })
  payload?: Payload;
}
