package shared

// UpdateFileSystemOntapConfiguration
// The configuration updates for an Amazon FSx for NetApp ONTAP file system.
type UpdateFileSystemOntapConfiguration struct {
	AutomaticBackupRetentionDays  *int64  `json:"AutomaticBackupRetentionDays,omitempty"`
	DailyAutomaticBackupStartTime *string `json:"DailyAutomaticBackupStartTime,omitempty"`
	FsxAdminPassword              *string `json:"FsxAdminPassword,omitempty"`
	WeeklyMaintenanceStartTime    *string `json:"WeeklyMaintenanceStartTime,omitempty"`
}
