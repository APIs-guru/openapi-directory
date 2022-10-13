package shared

type CreateFileSystemWindowsConfiguration struct {
	ActiveDirectoryID                       *string                                  `json:"ActiveDirectoryId"`
	Aliases                                 []string                                 `json:"Aliases"`
	AuditLogConfiguration                   *WindowsAuditLogCreateConfiguration      `json:"AuditLogConfiguration"`
	AutomaticBackupRetentionDays            *int64                                   `json:"AutomaticBackupRetentionDays"`
	CopyTagsToBackups                       *bool                                    `json:"CopyTagsToBackups"`
	DailyAutomaticBackupStartTime           *string                                  `json:"DailyAutomaticBackupStartTime"`
	DeploymentType                          *WindowsDeploymentTypeEnum               `json:"DeploymentType"`
	PreferredSubnetID                       *string                                  `json:"PreferredSubnetId"`
	SelfManagedActiveDirectoryConfiguration *SelfManagedActiveDirectoryConfiguration `json:"SelfManagedActiveDirectoryConfiguration"`
	ThroughputCapacity                      int64                                    `json:"ThroughputCapacity"`
	WeeklyMaintenanceStartTime              *string                                  `json:"WeeklyMaintenanceStartTime"`
}
