import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LambdaEventSourceTypeEnum } from "./lambdaeventsourcetypeenum";



// LambdaEventSource
/** 
 * Contains information about an event source for an Lambda function. The event source defines the topics on which this Lambda function subscribes to receive messages that run the function.
**/
export class LambdaEventSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: LambdaEventSourceTypeEnum;
}
