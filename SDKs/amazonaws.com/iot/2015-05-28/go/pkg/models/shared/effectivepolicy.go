package shared

// EffectivePolicy
// The policy that has the effect on the authorization results.
type EffectivePolicy struct {
	PolicyArn      *string `json:"policyArn,omitempty"`
	PolicyDocument *string `json:"policyDocument,omitempty"`
	PolicyName     *string `json:"policyName,omitempty"`
}
