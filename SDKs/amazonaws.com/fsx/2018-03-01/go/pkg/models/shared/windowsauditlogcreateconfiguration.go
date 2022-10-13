package shared

type WindowsAuditLogCreateConfiguration struct {
	AuditLogDestination          *string                        `json:"AuditLogDestination"`
	FileAccessAuditLogLevel      WindowsAccessAuditLogLevelEnum `json:"FileAccessAuditLogLevel"`
	FileShareAccessAuditLogLevel WindowsAccessAuditLogLevelEnum `json:"FileShareAccessAuditLogLevel"`
}
