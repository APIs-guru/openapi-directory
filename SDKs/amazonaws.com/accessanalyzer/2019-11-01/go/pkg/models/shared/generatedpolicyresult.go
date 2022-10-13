package shared

type GeneratedPolicyResult struct {
	GeneratedPolicies []GeneratedPolicy `json:"generatedPolicies"`
	Properties        interface{}       `json:"properties"`
}
