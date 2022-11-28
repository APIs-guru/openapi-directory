package shared

// LaunchTemplateConfiguration
// Identifies an Amazon EC2 launch template to use for a specific account.
type LaunchTemplateConfiguration struct {
	AccountID         *string `json:"accountId,omitempty"`
	LaunchTemplateID  string  `json:"launchTemplateId"`
	SetDefaultVersion *bool   `json:"setDefaultVersion,omitempty"`
}
