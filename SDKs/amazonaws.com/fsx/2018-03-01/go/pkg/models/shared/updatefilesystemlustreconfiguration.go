package shared

type UpdateFileSystemLustreConfiguration struct {
	AutoImportPolicy              *AutoImportPolicyTypeEnum `json:"AutoImportPolicy"`
	AutomaticBackupRetentionDays  *int64                    `json:"AutomaticBackupRetentionDays"`
	DailyAutomaticBackupStartTime *string                   `json:"DailyAutomaticBackupStartTime"`
	DataCompressionType           *DataCompressionTypeEnum  `json:"DataCompressionType"`
	WeeklyMaintenanceStartTime    *string                   `json:"WeeklyMaintenanceStartTime"`
}
