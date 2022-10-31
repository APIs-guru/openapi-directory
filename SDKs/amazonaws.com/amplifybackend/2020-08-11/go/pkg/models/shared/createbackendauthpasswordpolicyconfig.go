package shared



type CreateBackendAuthPasswordPolicyConfig struct {
    AdditionalConstraints []AdditionalConstraintsElementEnum `json:"AdditionalConstraints,omitempty"`
    MinimumLength float64 `json:"MinimumLength"`
    
}

