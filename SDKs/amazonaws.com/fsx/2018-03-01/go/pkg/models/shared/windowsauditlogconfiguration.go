package shared

// WindowsAuditLogConfiguration
// The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/file-access-auditing.html"> File access auditing</a>.
type WindowsAuditLogConfiguration struct {
	AuditLogDestination          *string                        `json:"AuditLogDestination,omitempty"`
	FileAccessAuditLogLevel      WindowsAccessAuditLogLevelEnum `json:"FileAccessAuditLogLevel"`
	FileShareAccessAuditLogLevel WindowsAccessAuditLogLevelEnum `json:"FileShareAccessAuditLogLevel"`
}
