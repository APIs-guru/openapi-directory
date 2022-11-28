package shared

// WindowsAuditLogCreateConfiguration
// The Windows file access auditing configuration used when creating or updating an Amazon FSx for Windows File Server file system.
type WindowsAuditLogCreateConfiguration struct {
	AuditLogDestination          *string                        `json:"AuditLogDestination,omitempty"`
	FileAccessAuditLogLevel      WindowsAccessAuditLogLevelEnum `json:"FileAccessAuditLogLevel"`
	FileShareAccessAuditLogLevel WindowsAccessAuditLogLevelEnum `json:"FileShareAccessAuditLogLevel"`
}
