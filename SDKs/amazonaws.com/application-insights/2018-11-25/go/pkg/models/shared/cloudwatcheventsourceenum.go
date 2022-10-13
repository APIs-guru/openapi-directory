package shared

type CloudWatchEventSourceEnum string

const (
	CloudWatchEventSourceEnumEc2        CloudWatchEventSourceEnum = "EC2"
	CloudWatchEventSourceEnumCodeDeploy CloudWatchEventSourceEnum = "CODE_DEPLOY"
	CloudWatchEventSourceEnumHealth     CloudWatchEventSourceEnum = "HEALTH"
	CloudWatchEventSourceEnumRds        CloudWatchEventSourceEnum = "RDS"
)
