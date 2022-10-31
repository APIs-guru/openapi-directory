package shared



type CreateBackupRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    FileSystemID *string `json:"FileSystemId,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    VolumeID *string `json:"VolumeId,omitempty"`
    
}

