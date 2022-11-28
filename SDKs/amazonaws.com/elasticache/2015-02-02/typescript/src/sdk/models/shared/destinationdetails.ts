import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsDestinationDetails } from "./cloudwatchlogsdestinationdetails";
import { KinesisFirehoseDestinationDetails } from "./kinesisfirehosedestinationdetails";



// DestinationDetails
/** 
 * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
**/
export class DestinationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cloudWatchLogsDetails?: CloudWatchLogsDestinationDetails;

  @SpeakeasyMetadata()
  kinesisFirehoseDetails?: KinesisFirehoseDestinationDetails;
}
