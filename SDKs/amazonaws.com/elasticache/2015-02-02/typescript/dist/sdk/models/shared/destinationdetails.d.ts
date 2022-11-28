import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsDestinationDetails } from "./cloudwatchlogsdestinationdetails";
import { KinesisFirehoseDestinationDetails } from "./kinesisfirehosedestinationdetails";
/**
 * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
**/
export declare class DestinationDetails extends SpeakeasyBase {
    cloudWatchLogsDetails?: CloudWatchLogsDestinationDetails;
    kinesisFirehoseDetails?: KinesisFirehoseDestinationDetails;
}
