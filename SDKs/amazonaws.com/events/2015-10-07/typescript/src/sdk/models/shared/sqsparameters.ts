import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SqsParameters
/** 
 * This structure includes the custom parameter to be used when the target is an SQS FIFO queue.
**/
export class SqsParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MessageGroupId" })
  messageGroupId?: string;
}
