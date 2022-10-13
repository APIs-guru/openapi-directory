package shared

type UpdateFileSystemWindowsConfiguration struct {
	AuditLogConfiguration                   *WindowsAuditLogCreateConfiguration             `json:"AuditLogConfiguration"`
	AutomaticBackupRetentionDays            *int64                                          `json:"AutomaticBackupRetentionDays"`
	DailyAutomaticBackupStartTime           *string                                         `json:"DailyAutomaticBackupStartTime"`
	SelfManagedActiveDirectoryConfiguration *SelfManagedActiveDirectoryConfigurationUpdates `json:"SelfManagedActiveDirectoryConfiguration"`
	ThroughputCapacity                      *int64                                          `json:"ThroughputCapacity"`
	WeeklyMaintenanceStartTime              *string                                         `json:"WeeklyMaintenanceStartTime"`
}
