package shared

// SnsAction
// Describes an action to publish to an Amazon SNS topic.
type SnsAction struct {
	MessageFormat *MessageFormatEnum `json:"messageFormat,omitempty"`
	RoleArn       string             `json:"roleArn"`
	TargetArn     string             `json:"targetArn"`
}
