package shared

// CreateBackupRequest
// The request object for the <code>CreateBackup</code> operation.
type CreateBackupRequest struct {
	ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
	FileSystemID       *string `json:"FileSystemId,omitempty"`
	Tags               []Tag   `json:"Tags,omitempty"`
	VolumeID           *string `json:"VolumeId,omitempty"`
}
