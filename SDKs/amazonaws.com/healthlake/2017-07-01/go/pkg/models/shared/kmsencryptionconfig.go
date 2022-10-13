package shared

type KmsEncryptionConfig struct {
	CmkType  CmkTypeEnum `json:"CmkType"`
	KmsKeyID *string     `json:"KmsKeyId"`
}
