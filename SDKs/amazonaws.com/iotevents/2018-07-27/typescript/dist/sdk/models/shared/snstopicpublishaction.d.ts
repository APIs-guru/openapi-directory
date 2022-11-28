import { SpeakeasyBase } from "../../../internal/utils";
import { Payload } from "./payload";
/**
 * Information required to publish the Amazon SNS message.
**/
export declare class SnsTopicPublishAction extends SpeakeasyBase {
    payload?: Payload;
    targetArn: string;
}
