package shared

// JobBookmarksEncryption
// Specifies how job bookmark data should be encrypted.
type JobBookmarksEncryption struct {
	JobBookmarksEncryptionMode *JobBookmarksEncryptionModeEnum `json:"JobBookmarksEncryptionMode,omitempty"`
	KmsKeyArn                  *string                         `json:"KmsKeyArn,omitempty"`
}
