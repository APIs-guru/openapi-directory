package shared



type UpdateFileSystemWindowsConfiguration struct {
    AuditLogConfiguration *WindowsAuditLogCreateConfiguration `json:"AuditLogConfiguration,omitempty"`
    AutomaticBackupRetentionDays *int64 `json:"AutomaticBackupRetentionDays,omitempty"`
    DailyAutomaticBackupStartTime *string `json:"DailyAutomaticBackupStartTime,omitempty"`
    SelfManagedActiveDirectoryConfiguration *SelfManagedActiveDirectoryConfigurationUpdates `json:"SelfManagedActiveDirectoryConfiguration,omitempty"`
    ThroughputCapacity *int64 `json:"ThroughputCapacity,omitempty"`
    WeeklyMaintenanceStartTime *string `json:"WeeklyMaintenanceStartTime,omitempty"`
    
}

