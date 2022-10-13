package shared

type EventDataSourceEnum string

const (
	EventDataSourceEnumAwsCloudTrail EventDataSourceEnum = "AWS_CLOUD_TRAIL"
	EventDataSourceEnumAwsCodeDeploy EventDataSourceEnum = "AWS_CODE_DEPLOY"
)
