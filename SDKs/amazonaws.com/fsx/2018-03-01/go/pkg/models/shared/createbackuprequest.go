package shared

type CreateBackupRequest struct {
	ClientRequestToken *string `json:"ClientRequestToken"`
	FileSystemID       *string `json:"FileSystemId"`
	Tags               []Tag   `json:"Tags"`
	VolumeID           *string `json:"VolumeId"`
}
