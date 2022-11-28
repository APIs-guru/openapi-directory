package shared

// LoggingOptions
// Information about logging options.
type LoggingOptions struct {
	Enabled bool             `json:"enabled"`
	Level   LoggingLevelEnum `json:"level"`
	RoleArn string           `json:"roleArn"`
}
