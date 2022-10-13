package shared

type KmsKeyDetails struct {
	EncryptionOption *EncryptionOptionEnum `json:"EncryptionOption"`
	KmsKeyID         *string               `json:"KMSKeyId"`
}
