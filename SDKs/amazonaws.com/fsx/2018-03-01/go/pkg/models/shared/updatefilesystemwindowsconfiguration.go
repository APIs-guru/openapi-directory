package shared

// UpdateFileSystemWindowsConfiguration
// Updates the configuration for an existing Amazon FSx for Windows File Server file system. Amazon FSx only overwrites existing properties with non-null values provided in the request.
type UpdateFileSystemWindowsConfiguration struct {
	AuditLogConfiguration                   *WindowsAuditLogCreateConfiguration             `json:"AuditLogConfiguration,omitempty"`
	AutomaticBackupRetentionDays            *int64                                          `json:"AutomaticBackupRetentionDays,omitempty"`
	DailyAutomaticBackupStartTime           *string                                         `json:"DailyAutomaticBackupStartTime,omitempty"`
	SelfManagedActiveDirectoryConfiguration *SelfManagedActiveDirectoryConfigurationUpdates `json:"SelfManagedActiveDirectoryConfiguration,omitempty"`
	ThroughputCapacity                      *int64                                          `json:"ThroughputCapacity,omitempty"`
	WeeklyMaintenanceStartTime              *string                                         `json:"WeeklyMaintenanceStartTime,omitempty"`
}
