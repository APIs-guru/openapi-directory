package shared

type CreateRemoteAccessSessionConfiguration struct {
	BillingMethod         *BillingMethodEnum `json:"billingMethod"`
	VpceConfigurationArns []string           `json:"vpceConfigurationArns"`
}
