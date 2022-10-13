package shared

type EncryptionConfiguration struct {
	CloudWatchEncryption   *CloudWatchEncryption   `json:"CloudWatchEncryption"`
	JobBookmarksEncryption *JobBookmarksEncryption `json:"JobBookmarksEncryption"`
	S3Encryption           []S3Encryption          `json:"S3Encryption"`
}
