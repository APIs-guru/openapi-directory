package shared

type LaunchTemplateConfiguration struct {
	AccountID         *string `json:"accountId"`
	LaunchTemplateID  string  `json:"launchTemplateId"`
	SetDefaultVersion *bool   `json:"setDefaultVersion"`
}
