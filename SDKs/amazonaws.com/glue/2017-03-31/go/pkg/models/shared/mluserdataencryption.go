package shared

type MlUserDataEncryption struct {
	KmsKeyID                 *string                            `json:"KmsKeyId,omitempty"`
	MlUserDataEncryptionMode MlUserDataEncryptionModeStringEnum `json:"MlUserDataEncryptionMode"`
}
