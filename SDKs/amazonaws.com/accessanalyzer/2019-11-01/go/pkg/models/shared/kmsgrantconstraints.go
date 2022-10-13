package shared

type KmsGrantConstraints struct {
	EncryptionContextEquals map[string]string `json:"encryptionContextEquals"`
	EncryptionContextSubset map[string]string `json:"encryptionContextSubset"`
}
