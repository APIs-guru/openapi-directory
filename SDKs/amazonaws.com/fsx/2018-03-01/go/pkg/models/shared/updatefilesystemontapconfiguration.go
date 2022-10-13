package shared

type UpdateFileSystemOntapConfiguration struct {
	AutomaticBackupRetentionDays  *int64  `json:"AutomaticBackupRetentionDays"`
	DailyAutomaticBackupStartTime *string `json:"DailyAutomaticBackupStartTime"`
	FsxAdminPassword              *string `json:"FsxAdminPassword"`
	WeeklyMaintenanceStartTime    *string `json:"WeeklyMaintenanceStartTime"`
}
