package shared



type CloudWatchMonitoringConfiguration struct {
    LogGroupName string `json:"logGroupName"`
    LogStreamNamePrefix *string `json:"logStreamNamePrefix,omitempty"`
    
}

