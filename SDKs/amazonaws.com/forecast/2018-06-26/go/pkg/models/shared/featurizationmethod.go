package shared

type FeaturizationMethod struct {
	FeaturizationMethodName       FeaturizationMethodNameEnum `json:"FeaturizationMethodName"`
	FeaturizationMethodParameters map[string]string           `json:"FeaturizationMethodParameters,omitempty"`
}
