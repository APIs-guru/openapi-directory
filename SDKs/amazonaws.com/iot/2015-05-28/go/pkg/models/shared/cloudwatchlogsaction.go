package shared

// CloudwatchLogsAction
// Describes an action that sends data to CloudWatch Logs.
type CloudwatchLogsAction struct {
	LogGroupName string `json:"logGroupName"`
	RoleArn      string `json:"roleArn"`
}
