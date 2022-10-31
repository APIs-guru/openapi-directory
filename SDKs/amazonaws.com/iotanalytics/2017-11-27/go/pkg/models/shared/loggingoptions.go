package shared



type LoggingOptions struct {
    Enabled bool `json:"enabled"`
    Level LoggingLevelEnum `json:"level"`
    RoleArn string `json:"roleArn"`
    
}

