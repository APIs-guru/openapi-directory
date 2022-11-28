package shared

// ClientPolicy
// An object that represents a client policy.
type ClientPolicy struct {
	TLS *ClientPolicyTLS `json:"tls,omitempty"`
}
