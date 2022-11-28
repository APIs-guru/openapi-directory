import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisStreamSourceConfiguration
/** 
 * The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream.
**/
export class KinesisStreamSourceConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KinesisStreamARN" })
  kinesisStreamArn: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn: string;
}
