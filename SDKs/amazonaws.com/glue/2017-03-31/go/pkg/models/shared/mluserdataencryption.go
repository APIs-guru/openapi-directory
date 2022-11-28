package shared

// MlUserDataEncryption
// The encryption-at-rest settings of the transform that apply to accessing user data.
type MlUserDataEncryption struct {
	KmsKeyID                 *string                            `json:"KmsKeyId,omitempty"`
	MlUserDataEncryptionMode MlUserDataEncryptionModeStringEnum `json:"MlUserDataEncryptionMode"`
}
