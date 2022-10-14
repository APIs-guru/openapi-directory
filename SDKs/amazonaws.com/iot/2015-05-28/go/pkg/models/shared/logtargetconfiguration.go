package shared

type LogTargetConfiguration struct {
	LogLevel  *LogLevelEnum `json:"logLevel,omitempty"`
	LogTarget *LogTarget    `json:"logTarget,omitempty"`
}
