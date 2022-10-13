package shared

type GetV2LoggingOptionsResponse struct {
	DefaultLogLevel *LogLevelEnum `json:"defaultLogLevel"`
	DisableAllLogs  *bool         `json:"disableAllLogs"`
	RoleArn         *string       `json:"roleArn"`
}
