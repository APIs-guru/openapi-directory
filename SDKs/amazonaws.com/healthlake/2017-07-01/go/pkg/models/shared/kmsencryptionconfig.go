package shared

// KmsEncryptionConfig
//
//	The customer-managed-key(CMK) used when creating a Data Store. If a customer owned key is not specified, an AWS owned key will be used for encryption.
type KmsEncryptionConfig struct {
	CmkType  CmkTypeEnum `json:"CmkType"`
	KmsKeyID *string     `json:"KmsKeyId,omitempty"`
}
