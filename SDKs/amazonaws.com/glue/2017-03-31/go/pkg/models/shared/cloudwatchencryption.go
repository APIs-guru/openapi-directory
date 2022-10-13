package shared

type CloudWatchEncryption struct {
	CloudWatchEncryptionMode *CloudWatchEncryptionModeEnum `json:"CloudWatchEncryptionMode"`
	KmsKeyArn                *string                       `json:"KmsKeyArn"`
}
