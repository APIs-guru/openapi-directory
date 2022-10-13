package shared

type CreateBackendAuthPasswordPolicyConfig struct {
	AdditionalConstraints []AdditionalConstraintsElementEnum `json:"AdditionalConstraints"`
	MinimumLength         float64                            `json:"MinimumLength"`
}
