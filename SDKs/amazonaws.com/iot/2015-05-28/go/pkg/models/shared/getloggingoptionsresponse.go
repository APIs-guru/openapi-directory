package shared

type GetLoggingOptionsResponse struct {
	LogLevel *LogLevelEnum `json:"logLevel"`
	RoleArn  *string       `json:"roleArn"`
}
