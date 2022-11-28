package shared

type LogDestinationTypeEnum string

const (
	LogDestinationTypeEnumCloudWatchLogs LogDestinationTypeEnum = "cloud-watch-logs"
	LogDestinationTypeEnumS3             LogDestinationTypeEnum = "s3"
)
