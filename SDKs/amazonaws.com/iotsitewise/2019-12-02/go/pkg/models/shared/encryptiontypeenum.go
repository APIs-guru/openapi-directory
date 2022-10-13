package shared

type EncryptionTypeEnum string

const (
	EncryptionTypeEnumSitewiseDefaultEncryption EncryptionTypeEnum = "SITEWISE_DEFAULT_ENCRYPTION"
	EncryptionTypeEnumKmsBasedEncryption        EncryptionTypeEnum = "KMS_BASED_ENCRYPTION"
)
