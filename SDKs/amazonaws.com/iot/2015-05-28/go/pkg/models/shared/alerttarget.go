package shared

// AlertTarget
// A structure containing the alert target ARN and the role ARN.
type AlertTarget struct {
	AlertTargetArn string `json:"alertTargetArn"`
	RoleArn        string `json:"roleArn"`
}
