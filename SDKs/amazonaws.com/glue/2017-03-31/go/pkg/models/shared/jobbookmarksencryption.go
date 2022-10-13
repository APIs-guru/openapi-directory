package shared

type JobBookmarksEncryption struct {
	JobBookmarksEncryptionMode *JobBookmarksEncryptionModeEnum `json:"JobBookmarksEncryptionMode"`
	KmsKeyArn                  *string                         `json:"KmsKeyArn"`
}
