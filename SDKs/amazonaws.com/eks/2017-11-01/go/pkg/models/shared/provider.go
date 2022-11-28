package shared

// Provider
// Identifies the Key Management Service (KMS) key used to encrypt the secrets.
type Provider struct {
	KeyArn *string `json:"keyArn,omitempty"`
}
