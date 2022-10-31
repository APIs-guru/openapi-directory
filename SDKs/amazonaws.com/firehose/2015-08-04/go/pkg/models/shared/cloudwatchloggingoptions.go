package shared



type CloudWatchLoggingOptions struct {
    Enabled *bool `json:"Enabled,omitempty"`
    LogGroupName *string `json:"LogGroupName,omitempty"`
    LogStreamName *string `json:"LogStreamName,omitempty"`
    
}

