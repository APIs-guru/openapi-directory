package shared

type MlUserDataEncryption struct {
	KmsKeyID                 *string                            `json:"KmsKeyId"`
	MlUserDataEncryptionMode MlUserDataEncryptionModeStringEnum `json:"MlUserDataEncryptionMode"`
}
