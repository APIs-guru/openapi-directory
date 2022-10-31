package shared

type Encryption struct {
	EncryptionType *EncryptionTypeEnum `json:"EncryptionType,omitempty"`
	KmsContext     *string             `json:"KMSContext,omitempty"`
	KmsKeyID       *string             `json:"KMSKeyId,omitempty"`
}
