package shared

type SnsAction struct {
	MessageFormat *MessageFormatEnum `json:"messageFormat,omitempty"`
	RoleArn       string             `json:"roleArn"`
	TargetArn     string             `json:"targetArn"`
}
