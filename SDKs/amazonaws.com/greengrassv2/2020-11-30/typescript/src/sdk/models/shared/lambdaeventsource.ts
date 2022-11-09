import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaEventSourceTypeEnum } from "./lambdaeventsourcetypeenum";


// LambdaEventSource
/** 
 * Contains information about an event source for an Lambda function. The event source defines the topics on which this Lambda function subscribes to receive messages that run the function.
**/
export class LambdaEventSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=topic" })
  topic: string;

  @Metadata({ data: "json, name=type" })
  type: LambdaEventSourceTypeEnum;
}
