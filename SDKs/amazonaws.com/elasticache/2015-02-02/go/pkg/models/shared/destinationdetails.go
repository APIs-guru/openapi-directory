package shared

// DestinationDetails
// Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
type DestinationDetails struct {
	CloudWatchLogsDetails  *CloudWatchLogsDestinationDetails
	KinesisFirehoseDetails *KinesisFirehoseDestinationDetails
}
