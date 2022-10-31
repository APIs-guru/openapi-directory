package shared



type GetLoggingOptionsResponse struct {
    LogLevel *LogLevelEnum `json:"logLevel,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    
}

