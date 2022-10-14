package shared

type KmsGrantConstraints struct {
	EncryptionContextEquals map[string]string `json:"encryptionContextEquals,omitempty"`
	EncryptionContextSubset map[string]string `json:"encryptionContextSubset,omitempty"`
}
