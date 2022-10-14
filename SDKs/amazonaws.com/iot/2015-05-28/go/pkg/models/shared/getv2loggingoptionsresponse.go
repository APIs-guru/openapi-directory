package shared

type GetV2LoggingOptionsResponse struct {
	DefaultLogLevel *LogLevelEnum `json:"defaultLogLevel,omitempty"`
	DisableAllLogs  *bool         `json:"disableAllLogs,omitempty"`
	RoleArn         *string       `json:"roleArn,omitempty"`
}
