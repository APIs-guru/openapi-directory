import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KinesisStreamConfig } from "./kinesisstreamconfig";



// EndPoint
/** 
 * Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.
**/
export class EndPoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  kinesisStreamConfig?: KinesisStreamConfig;

  @SpeakeasyMetadata()
  streamType: string;
}
