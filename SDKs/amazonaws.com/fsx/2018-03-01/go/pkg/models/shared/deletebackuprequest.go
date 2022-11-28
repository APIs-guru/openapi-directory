package shared

// DeleteBackupRequest
// The request object for <code>DeleteBackup</code> operation.
type DeleteBackupRequest struct {
	BackupID           string  `json:"BackupId"`
	ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
}
