package shared

// CloudWatchEncryption
// Specifies how Amazon CloudWatch data should be encrypted.
type CloudWatchEncryption struct {
	CloudWatchEncryptionMode *CloudWatchEncryptionModeEnum `json:"CloudWatchEncryptionMode,omitempty"`
	KmsKeyArn                *string                       `json:"KmsKeyArn,omitempty"`
}
