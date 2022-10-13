package shared

type CopyBackupRequest struct {
	ClientRequestToken *string `json:"ClientRequestToken"`
	CopyTags           *bool   `json:"CopyTags"`
	KmsKeyID           *string `json:"KmsKeyId"`
	SourceBackupID     string  `json:"SourceBackupId"`
	SourceRegion       *string `json:"SourceRegion"`
	Tags               []Tag   `json:"Tags"`
}
