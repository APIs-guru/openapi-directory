package shared



type WindowsAuditLogCreateConfiguration struct {
    AuditLogDestination *string `json:"AuditLogDestination,omitempty"`
    FileAccessAuditLogLevel WindowsAccessAuditLogLevelEnum `json:"FileAccessAuditLogLevel"`
    FileShareAccessAuditLogLevel WindowsAccessAuditLogLevelEnum `json:"FileShareAccessAuditLogLevel"`
    
}

