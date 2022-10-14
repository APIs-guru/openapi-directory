package shared

type CreateRemoteAccessSessionConfiguration struct {
	BillingMethod         *BillingMethodEnum `json:"billingMethod,omitempty"`
	VpceConfigurationArns []string           `json:"vpceConfigurationArns,omitempty"`
}
