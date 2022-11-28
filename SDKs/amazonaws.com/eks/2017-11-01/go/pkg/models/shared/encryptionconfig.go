package shared

// EncryptionConfig
// The encryption configuration for the cluster.
type EncryptionConfig struct {
	Provider  *Provider `json:"provider,omitempty"`
	Resources []string  `json:"resources,omitempty"`
}
