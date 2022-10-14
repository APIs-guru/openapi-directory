package shared

type KmsKeyDetails struct {
	EncryptionOption *EncryptionOptionEnum `json:"EncryptionOption,omitempty"`
	KmsKeyID         *string               `json:"KMSKeyId,omitempty"`
}
