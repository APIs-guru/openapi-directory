package shared

// LustreFileSystemConfiguration
// The configuration for the Amazon FSx for Lustre file system.
type LustreFileSystemConfiguration struct {
	AutomaticBackupRetentionDays  *int64                       `json:"AutomaticBackupRetentionDays,omitempty"`
	CopyTagsToBackups             *bool                        `json:"CopyTagsToBackups,omitempty"`
	DailyAutomaticBackupStartTime *string                      `json:"DailyAutomaticBackupStartTime,omitempty"`
	DataCompressionType           *DataCompressionTypeEnum     `json:"DataCompressionType,omitempty"`
	DataRepositoryConfiguration   *DataRepositoryConfiguration `json:"DataRepositoryConfiguration,omitempty"`
	DeploymentType                *LustreDeploymentTypeEnum    `json:"DeploymentType,omitempty"`
	DriveCacheType                *DriveCacheTypeEnum          `json:"DriveCacheType,omitempty"`
	MountName                     *string                      `json:"MountName,omitempty"`
	PerUnitStorageThroughput      *int64                       `json:"PerUnitStorageThroughput,omitempty"`
	WeeklyMaintenanceStartTime    *string                      `json:"WeeklyMaintenanceStartTime,omitempty"`
}
