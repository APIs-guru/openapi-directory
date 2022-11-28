import { SpeakeasyBase } from "../../../internal/utils";
import { Payload } from "./payload";
/**
 * Information required to publish the MQTT message through the AWS IoT message broker.
**/
export declare class IotTopicPublishAction extends SpeakeasyBase {
    mqttTopic: string;
    payload?: Payload;
}
