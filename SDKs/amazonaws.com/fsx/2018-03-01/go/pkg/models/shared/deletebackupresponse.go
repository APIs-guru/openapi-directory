package shared

type DeleteBackupResponse struct {
	BackupID  *string              `json:"BackupId"`
	Lifecycle *BackupLifecycleEnum `json:"Lifecycle"`
}
