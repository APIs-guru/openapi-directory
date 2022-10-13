package shared

type WindowsFileSystemConfiguration struct {
	ActiveDirectoryID                       *string                               `json:"ActiveDirectoryId"`
	Aliases                                 []Alias                               `json:"Aliases"`
	AuditLogConfiguration                   *WindowsAuditLogConfiguration         `json:"AuditLogConfiguration"`
	AutomaticBackupRetentionDays            *int64                                `json:"AutomaticBackupRetentionDays"`
	CopyTagsToBackups                       *bool                                 `json:"CopyTagsToBackups"`
	DailyAutomaticBackupStartTime           *string                               `json:"DailyAutomaticBackupStartTime"`
	DeploymentType                          *WindowsDeploymentTypeEnum            `json:"DeploymentType"`
	MaintenanceOperationsInProgress         []FileSystemMaintenanceOperationEnum  `json:"MaintenanceOperationsInProgress"`
	PreferredFileServerIP                   *string                               `json:"PreferredFileServerIp"`
	PreferredSubnetID                       *string                               `json:"PreferredSubnetId"`
	RemoteAdministrationEndpoint            *string                               `json:"RemoteAdministrationEndpoint"`
	SelfManagedActiveDirectoryConfiguration *SelfManagedActiveDirectoryAttributes `json:"SelfManagedActiveDirectoryConfiguration"`
	ThroughputCapacity                      *int64                                `json:"ThroughputCapacity"`
	WeeklyMaintenanceStartTime              *string                               `json:"WeeklyMaintenanceStartTime"`
}
