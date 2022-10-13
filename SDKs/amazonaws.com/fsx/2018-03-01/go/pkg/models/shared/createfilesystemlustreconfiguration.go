package shared

type CreateFileSystemLustreConfiguration struct {
	AutoImportPolicy              *AutoImportPolicyTypeEnum `json:"AutoImportPolicy"`
	AutomaticBackupRetentionDays  *int64                    `json:"AutomaticBackupRetentionDays"`
	CopyTagsToBackups             *bool                     `json:"CopyTagsToBackups"`
	DailyAutomaticBackupStartTime *string                   `json:"DailyAutomaticBackupStartTime"`
	DataCompressionType           *DataCompressionTypeEnum  `json:"DataCompressionType"`
	DeploymentType                *LustreDeploymentTypeEnum `json:"DeploymentType"`
	DriveCacheType                *DriveCacheTypeEnum       `json:"DriveCacheType"`
	ExportPath                    *string                   `json:"ExportPath"`
	ImportPath                    *string                   `json:"ImportPath"`
	ImportedFileChunkSize         *int64                    `json:"ImportedFileChunkSize"`
	PerUnitStorageThroughput      *int64                    `json:"PerUnitStorageThroughput"`
	WeeklyMaintenanceStartTime    *string                   `json:"WeeklyMaintenanceStartTime"`
}
