package shared

type WindowsAuditLogConfiguration struct {
	AuditLogDestination          *string                        `json:"AuditLogDestination,omitempty"`
	FileAccessAuditLogLevel      WindowsAccessAuditLogLevelEnum `json:"FileAccessAuditLogLevel"`
	FileShareAccessAuditLogLevel WindowsAccessAuditLogLevelEnum `json:"FileShareAccessAuditLogLevel"`
}
