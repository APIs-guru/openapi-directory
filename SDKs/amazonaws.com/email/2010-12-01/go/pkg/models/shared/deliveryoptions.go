package shared

// DeliveryOptions
// Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
type DeliveryOptions struct {
	TLSPolicy *TLSPolicyEnum
}
