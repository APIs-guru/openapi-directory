package shared

type CloudWatchLogsConfig struct {
	GroupName  *string                  `json:"groupName"`
	Status     LogsConfigStatusTypeEnum `json:"status"`
	StreamName *string                  `json:"streamName"`
}
