package shared

type LustreFileSystemConfiguration struct {
	AutomaticBackupRetentionDays  *int64                       `json:"AutomaticBackupRetentionDays"`
	CopyTagsToBackups             *bool                        `json:"CopyTagsToBackups"`
	DailyAutomaticBackupStartTime *string                      `json:"DailyAutomaticBackupStartTime"`
	DataCompressionType           *DataCompressionTypeEnum     `json:"DataCompressionType"`
	DataRepositoryConfiguration   *DataRepositoryConfiguration `json:"DataRepositoryConfiguration"`
	DeploymentType                *LustreDeploymentTypeEnum    `json:"DeploymentType"`
	DriveCacheType                *DriveCacheTypeEnum          `json:"DriveCacheType"`
	MountName                     *string                      `json:"MountName"`
	PerUnitStorageThroughput      *int64                       `json:"PerUnitStorageThroughput"`
	WeeklyMaintenanceStartTime    *string                      `json:"WeeklyMaintenanceStartTime"`
}
