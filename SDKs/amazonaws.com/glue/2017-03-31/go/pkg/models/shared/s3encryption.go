package shared

// S3Encryption
// Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.
type S3Encryption struct {
	KmsKeyArn        *string               `json:"KmsKeyArn,omitempty"`
	S3EncryptionMode *S3EncryptionModeEnum `json:"S3EncryptionMode,omitempty"`
}
