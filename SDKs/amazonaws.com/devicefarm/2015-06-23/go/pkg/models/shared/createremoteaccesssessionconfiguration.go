package shared

// CreateRemoteAccessSessionConfiguration
// Configuration settings for a remote access session, including billing method.
type CreateRemoteAccessSessionConfiguration struct {
	BillingMethod         *BillingMethodEnum `json:"billingMethod,omitempty"`
	VpceConfigurationArns []string           `json:"vpceConfigurationArns,omitempty"`
}
