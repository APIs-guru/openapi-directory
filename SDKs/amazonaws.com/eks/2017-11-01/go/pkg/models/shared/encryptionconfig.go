package shared

type EncryptionConfig struct {
	Provider  *Provider `json:"provider"`
	Resources []string  `json:"resources"`
}
