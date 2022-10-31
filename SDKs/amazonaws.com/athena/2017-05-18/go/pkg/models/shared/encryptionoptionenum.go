package shared

type EncryptionOptionEnum string

const (
	EncryptionOptionEnumSseS3  EncryptionOptionEnum = "SSE_S3"
	EncryptionOptionEnumSseKms EncryptionOptionEnum = "SSE_KMS"
	EncryptionOptionEnumCseKms EncryptionOptionEnum = "CSE_KMS"
)
