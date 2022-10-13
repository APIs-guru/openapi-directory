package shared

type UpdateBackendAuthPasswordPolicyConfig struct {
	AdditionalConstraints []AdditionalConstraintsElementEnum `json:"AdditionalConstraints"`
	MinimumLength         *float64                           `json:"MinimumLength"`
}
