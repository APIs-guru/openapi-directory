import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisStreamSourceDescription
/** 
 * Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.
**/
export class KinesisStreamSourceDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryStartTimestamp" })
  deliveryStartTimestamp?: Date;

  @Metadata({ data: "json, name=KinesisStreamARN" })
  kinesisStreamArn?: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
