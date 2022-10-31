package shared

type DescribeAccountAuditConfigurationResponse struct {
	AuditCheckConfigurations              map[string]AuditCheckConfiguration `json:"auditCheckConfigurations,omitempty"`
	AuditNotificationTargetConfigurations map[string]AuditNotificationTarget `json:"auditNotificationTargetConfigurations,omitempty"`
	RoleArn                               *string                            `json:"roleArn,omitempty"`
}
