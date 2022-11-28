package shared

// DeleteBackupResponse
// The response object for <code>DeleteBackup</code> operation.
type DeleteBackupResponse struct {
	BackupID  *string              `json:"BackupId,omitempty"`
	Lifecycle *BackupLifecycleEnum `json:"Lifecycle,omitempty"`
}
