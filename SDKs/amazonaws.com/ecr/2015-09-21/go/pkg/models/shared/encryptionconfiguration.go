package shared

type EncryptionConfiguration struct {
	EncryptionType EncryptionTypeEnum `json:"encryptionType"`
	KmsKey         *string            `json:"kmsKey"`
}
