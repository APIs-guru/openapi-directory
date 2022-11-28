import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisStreamSourceDescription
/** 
 * Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.
**/
export class KinesisStreamSourceDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryStartTimestamp" })
  deliveryStartTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=KinesisStreamARN" })
  kinesisStreamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
