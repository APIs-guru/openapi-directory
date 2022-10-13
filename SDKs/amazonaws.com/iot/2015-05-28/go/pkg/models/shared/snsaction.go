package shared

type SnsAction struct {
	MessageFormat *MessageFormatEnum `json:"messageFormat"`
	RoleArn       string             `json:"roleArn"`
	TargetArn     string             `json:"targetArn"`
}
