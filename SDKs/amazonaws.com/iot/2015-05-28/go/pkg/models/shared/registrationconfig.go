package shared

type RegistrationConfig struct {
	RoleArn      *string `json:"roleArn,omitempty"`
	TemplateBody *string `json:"templateBody,omitempty"`
}
