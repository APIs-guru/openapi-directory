package shared

// LoggingOptions
// The values of the AWS IoT Events logging options.
type LoggingOptions struct {
	DetectorDebugOptions []DetectorDebugOption `json:"detectorDebugOptions,omitempty"`
	Enabled              bool                  `json:"enabled"`
	Level                LoggingLevelEnum      `json:"level"`
	RoleArn              string                `json:"roleArn"`
}
