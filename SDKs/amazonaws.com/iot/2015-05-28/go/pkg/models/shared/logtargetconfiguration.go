package shared

// LogTargetConfiguration
// The target configuration.
type LogTargetConfiguration struct {
	LogLevel  *LogLevelEnum `json:"logLevel,omitempty"`
	LogTarget *LogTarget    `json:"logTarget,omitempty"`
}
