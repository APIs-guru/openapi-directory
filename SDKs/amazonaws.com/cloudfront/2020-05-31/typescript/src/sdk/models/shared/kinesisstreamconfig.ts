import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisStreamConfig
/** 
 * Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
**/
export class KinesisStreamConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  roleArn: string;

  @SpeakeasyMetadata()
  streamArn: string;
}
