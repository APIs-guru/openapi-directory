package shared

type CloudWatchLogsConfig struct {
	GroupName  *string                  `json:"groupName,omitempty"`
	Status     LogsConfigStatusTypeEnum `json:"status"`
	StreamName *string                  `json:"streamName,omitempty"`
}
