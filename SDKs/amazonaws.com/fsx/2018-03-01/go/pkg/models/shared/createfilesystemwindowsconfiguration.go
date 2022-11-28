package shared

// CreateFileSystemWindowsConfiguration
// The configuration object for the Microsoft Windows file system used in <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code> operations.
type CreateFileSystemWindowsConfiguration struct {
	ActiveDirectoryID                       *string                                  `json:"ActiveDirectoryId,omitempty"`
	Aliases                                 []string                                 `json:"Aliases,omitempty"`
	AuditLogConfiguration                   *WindowsAuditLogCreateConfiguration      `json:"AuditLogConfiguration,omitempty"`
	AutomaticBackupRetentionDays            *int64                                   `json:"AutomaticBackupRetentionDays,omitempty"`
	CopyTagsToBackups                       *bool                                    `json:"CopyTagsToBackups,omitempty"`
	DailyAutomaticBackupStartTime           *string                                  `json:"DailyAutomaticBackupStartTime,omitempty"`
	DeploymentType                          *WindowsDeploymentTypeEnum               `json:"DeploymentType,omitempty"`
	PreferredSubnetID                       *string                                  `json:"PreferredSubnetId,omitempty"`
	SelfManagedActiveDirectoryConfiguration *SelfManagedActiveDirectoryConfiguration `json:"SelfManagedActiveDirectoryConfiguration,omitempty"`
	ThroughputCapacity                      int64                                    `json:"ThroughputCapacity"`
	WeeklyMaintenanceStartTime              *string                                  `json:"WeeklyMaintenanceStartTime,omitempty"`
}
