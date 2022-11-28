package shared

// Encryption
// Contains information about the encryption used to store the job results in Amazon S3.
type Encryption struct {
	EncryptionType *EncryptionTypeEnum `json:"EncryptionType,omitempty"`
	KmsContext     *string             `json:"KMSContext,omitempty"`
	KmsKeyID       *string             `json:"KMSKeyId,omitempty"`
}
