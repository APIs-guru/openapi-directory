package shared

// UpdateFileSystemLustreConfiguration
// The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation.
type UpdateFileSystemLustreConfiguration struct {
	AutoImportPolicy              *AutoImportPolicyTypeEnum `json:"AutoImportPolicy,omitempty"`
	AutomaticBackupRetentionDays  *int64                    `json:"AutomaticBackupRetentionDays,omitempty"`
	DailyAutomaticBackupStartTime *string                   `json:"DailyAutomaticBackupStartTime,omitempty"`
	DataCompressionType           *DataCompressionTypeEnum  `json:"DataCompressionType,omitempty"`
	WeeklyMaintenanceStartTime    *string                   `json:"WeeklyMaintenanceStartTime,omitempty"`
}
