package shared

type ClientPolicy struct {
	TLS *ClientPolicyTLS `json:"tls,omitempty"`
}
