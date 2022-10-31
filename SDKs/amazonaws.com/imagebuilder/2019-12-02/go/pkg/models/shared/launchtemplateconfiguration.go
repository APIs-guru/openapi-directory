package shared

type LaunchTemplateConfiguration struct {
	AccountID         *string `json:"accountId,omitempty"`
	LaunchTemplateID  string  `json:"launchTemplateId"`
	SetDefaultVersion *bool   `json:"setDefaultVersion,omitempty"`
}
