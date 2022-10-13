package shared

type Encryption struct {
	EncryptionType *EncryptionTypeEnum `json:"EncryptionType"`
	KmsContext     *string             `json:"KMSContext"`
	KmsKeyID       *string             `json:"KMSKeyId"`
}
