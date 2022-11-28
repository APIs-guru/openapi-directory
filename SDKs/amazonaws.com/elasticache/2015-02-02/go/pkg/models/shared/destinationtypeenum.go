package shared

type DestinationTypeEnum string

const (
	DestinationTypeEnumCloudwatchLogs  DestinationTypeEnum = "cloudwatch-logs"
	DestinationTypeEnumKinesisFirehose DestinationTypeEnum = "kinesis-firehose"
)
