package shared

type AuditNotificationTarget struct {
	Enabled   *bool   `json:"enabled"`
	RoleArn   *string `json:"roleArn"`
	TargetArn *string `json:"targetArn"`
}
