package shared

// KeyUsage
// The Key Usage X.509 v3 extension defines the purpose of the public key contained in the certificate.
type KeyUsage struct {
	Name *KeyUsageNameEnum `json:"Name,omitempty"`
}
