package shared

// AuditNotificationTarget
// Information about the targets to which audit notifications are sent.
type AuditNotificationTarget struct {
	Enabled   *bool   `json:"enabled,omitempty"`
	RoleArn   *string `json:"roleArn,omitempty"`
	TargetArn *string `json:"targetArn,omitempty"`
}
