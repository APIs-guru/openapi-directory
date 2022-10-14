package shared

type AuditNotificationTarget struct {
	Enabled   *bool   `json:"enabled,omitempty"`
	RoleArn   *string `json:"roleArn,omitempty"`
	TargetArn *string `json:"targetArn,omitempty"`
}
