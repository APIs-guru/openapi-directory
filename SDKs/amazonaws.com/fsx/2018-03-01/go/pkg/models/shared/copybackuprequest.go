package shared



type CopyBackupRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    CopyTags *bool `json:"CopyTags,omitempty"`
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    SourceBackupID string `json:"SourceBackupId"`
    SourceRegion *string `json:"SourceRegion,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

