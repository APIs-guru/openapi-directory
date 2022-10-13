package shared

type EncryptionConfiguration struct {
	EncryptionOption EncryptionOptionEnum `json:"EncryptionOption"`
	KmsKey           *string              `json:"KmsKey"`
}
