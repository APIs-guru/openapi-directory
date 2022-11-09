import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisStreamSourceConfiguration
/** 
 * The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream.
**/
export class KinesisStreamSourceConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=KinesisStreamARN" })
  kinesisStreamArn: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn: string;
}
