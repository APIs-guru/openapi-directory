package shared

type LoggerTypeEnum string

const (
	LoggerTypeEnumFileSystem    LoggerTypeEnum = "FileSystem"
	LoggerTypeEnumAwsCloudWatch LoggerTypeEnum = "AWSCloudWatch"
)
