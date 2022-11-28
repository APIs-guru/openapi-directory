package shared

// WindowsFileSystemConfiguration
// The configuration for this Microsoft Windows file system.
type WindowsFileSystemConfiguration struct {
	ActiveDirectoryID                       *string                               `json:"ActiveDirectoryId,omitempty"`
	Aliases                                 []Alias                               `json:"Aliases,omitempty"`
	AuditLogConfiguration                   *WindowsAuditLogConfiguration         `json:"AuditLogConfiguration,omitempty"`
	AutomaticBackupRetentionDays            *int64                                `json:"AutomaticBackupRetentionDays,omitempty"`
	CopyTagsToBackups                       *bool                                 `json:"CopyTagsToBackups,omitempty"`
	DailyAutomaticBackupStartTime           *string                               `json:"DailyAutomaticBackupStartTime,omitempty"`
	DeploymentType                          *WindowsDeploymentTypeEnum            `json:"DeploymentType,omitempty"`
	MaintenanceOperationsInProgress         []FileSystemMaintenanceOperationEnum  `json:"MaintenanceOperationsInProgress,omitempty"`
	PreferredFileServerIP                   *string                               `json:"PreferredFileServerIp,omitempty"`
	PreferredSubnetID                       *string                               `json:"PreferredSubnetId,omitempty"`
	RemoteAdministrationEndpoint            *string                               `json:"RemoteAdministrationEndpoint,omitempty"`
	SelfManagedActiveDirectoryConfiguration *SelfManagedActiveDirectoryAttributes `json:"SelfManagedActiveDirectoryConfiguration,omitempty"`
	ThroughputCapacity                      *int64                                `json:"ThroughputCapacity,omitempty"`
	WeeklyMaintenanceStartTime              *string                               `json:"WeeklyMaintenanceStartTime,omitempty"`
}
