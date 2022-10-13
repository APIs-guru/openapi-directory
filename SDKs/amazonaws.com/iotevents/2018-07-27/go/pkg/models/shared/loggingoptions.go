package shared

type LoggingOptions struct {
	DetectorDebugOptions []DetectorDebugOption `json:"detectorDebugOptions"`
	Enabled              bool                  `json:"enabled"`
	Level                LoggingLevelEnum      `json:"level"`
	RoleArn              string                `json:"roleArn"`
}
