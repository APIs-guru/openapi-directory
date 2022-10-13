package shared

type LogTargetConfiguration struct {
	LogLevel  *LogLevelEnum `json:"logLevel"`
	LogTarget *LogTarget    `json:"logTarget"`
}
