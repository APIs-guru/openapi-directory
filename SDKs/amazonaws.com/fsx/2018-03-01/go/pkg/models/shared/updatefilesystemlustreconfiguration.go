package shared

type UpdateFileSystemLustreConfiguration struct {
	AutoImportPolicy              *AutoImportPolicyTypeEnum `json:"AutoImportPolicy,omitempty"`
	AutomaticBackupRetentionDays  *int64                    `json:"AutomaticBackupRetentionDays,omitempty"`
	DailyAutomaticBackupStartTime *string                   `json:"DailyAutomaticBackupStartTime,omitempty"`
	DataCompressionType           *DataCompressionTypeEnum  `json:"DataCompressionType,omitempty"`
	WeeklyMaintenanceStartTime    *string                   `json:"WeeklyMaintenanceStartTime,omitempty"`
}
