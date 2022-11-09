import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SqsParameters
/** 
 * This structure includes the custom parameter to be used when the target is an SQS FIFO queue.
**/
export class SqsParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=MessageGroupId" })
  messageGroupId?: string;
}
