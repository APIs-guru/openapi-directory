package shared

// SslPolicy
// Information about a policy used for SSL negotiation.
type SslPolicy struct {
	Ciphers      []Cipher
	Name         *string
	SslProtocols []string
}
