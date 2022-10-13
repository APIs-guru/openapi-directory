package shared

type WindowsAuditLogConfiguration struct {
	AuditLogDestination          *string                        `json:"AuditLogDestination"`
	FileAccessAuditLogLevel      WindowsAccessAuditLogLevelEnum `json:"FileAccessAuditLogLevel"`
	FileShareAccessAuditLogLevel WindowsAccessAuditLogLevelEnum `json:"FileShareAccessAuditLogLevel"`
}
