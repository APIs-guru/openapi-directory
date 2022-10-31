package shared

type S3EncryptionModeEnum string

const (
	S3EncryptionModeEnumDisabled S3EncryptionModeEnum = "DISABLED"
	S3EncryptionModeEnumSseKms   S3EncryptionModeEnum = "SSE-KMS"
	S3EncryptionModeEnumSseS3    S3EncryptionModeEnum = "SSE-S3"
)
