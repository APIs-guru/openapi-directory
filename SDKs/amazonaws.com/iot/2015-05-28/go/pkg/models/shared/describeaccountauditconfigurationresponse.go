package shared

type DescribeAccountAuditConfigurationResponse struct {
	AuditCheckConfigurations              map[string]AuditCheckConfiguration `json:"auditCheckConfigurations"`
	AuditNotificationTargetConfigurations map[string]AuditNotificationTarget `json:"auditNotificationTargetConfigurations"`
	RoleArn                               *string                            `json:"roleArn"`
}
