import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Payload } from "./payload";



// IotTopicPublishAction
/** 
 * Information required to publish the MQTT message through the AWS IoT message broker.
**/
export class IotTopicPublishAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mqttTopic" })
  mqttTopic: string;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: Payload;
}
