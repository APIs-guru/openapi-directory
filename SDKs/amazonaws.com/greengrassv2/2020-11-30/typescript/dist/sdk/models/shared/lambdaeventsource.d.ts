import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaEventSourceTypeEnum } from "./lambdaeventsourcetypeenum";
/**
 * Contains information about an event source for an Lambda function. The event source defines the topics on which this Lambda function subscribes to receive messages that run the function.
**/
export declare class LambdaEventSource extends SpeakeasyBase {
    topic: string;
    type: LambdaEventSourceTypeEnum;
}
