package shared

// CloudWatchLogsConfig
//
//	Information about CloudWatch Logs for a build project.
type CloudWatchLogsConfig struct {
	GroupName  *string                  `json:"groupName,omitempty"`
	Status     LogsConfigStatusTypeEnum `json:"status"`
	StreamName *string                  `json:"streamName,omitempty"`
}
