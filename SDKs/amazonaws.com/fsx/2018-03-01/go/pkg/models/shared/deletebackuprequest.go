package shared

type DeleteBackupRequest struct {
	BackupID           string  `json:"BackupId"`
	ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
}
