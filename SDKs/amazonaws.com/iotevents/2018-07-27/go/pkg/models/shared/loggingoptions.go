package shared



type LoggingOptions struct {
    DetectorDebugOptions []DetectorDebugOption `json:"detectorDebugOptions,omitempty"`
    Enabled bool `json:"enabled"`
    Level LoggingLevelEnum `json:"level"`
    RoleArn string `json:"roleArn"`
    
}

