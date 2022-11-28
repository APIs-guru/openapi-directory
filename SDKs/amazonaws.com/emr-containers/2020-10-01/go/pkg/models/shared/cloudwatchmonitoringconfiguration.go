package shared

// CloudWatchMonitoringConfiguration
// A configuration for CloudWatch monitoring. You can configure your jobs to send log information to CloudWatch Logs.
type CloudWatchMonitoringConfiguration struct {
	LogGroupName        string  `json:"logGroupName"`
	LogStreamNamePrefix *string `json:"logStreamNamePrefix,omitempty"`
}
