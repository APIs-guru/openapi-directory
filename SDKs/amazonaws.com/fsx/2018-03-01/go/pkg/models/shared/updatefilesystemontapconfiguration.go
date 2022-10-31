package shared



type UpdateFileSystemOntapConfiguration struct {
    AutomaticBackupRetentionDays *int64 `json:"AutomaticBackupRetentionDays,omitempty"`
    DailyAutomaticBackupStartTime *string `json:"DailyAutomaticBackupStartTime,omitempty"`
    FsxAdminPassword *string `json:"FsxAdminPassword,omitempty"`
    WeeklyMaintenanceStartTime *string `json:"WeeklyMaintenanceStartTime,omitempty"`
    
}

