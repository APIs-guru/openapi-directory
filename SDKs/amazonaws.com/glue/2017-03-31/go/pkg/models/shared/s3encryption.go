package shared

type S3Encryption struct {
	KmsKeyArn        *string               `json:"KmsKeyArn"`
	S3EncryptionMode *S3EncryptionModeEnum `json:"S3EncryptionMode"`
}
