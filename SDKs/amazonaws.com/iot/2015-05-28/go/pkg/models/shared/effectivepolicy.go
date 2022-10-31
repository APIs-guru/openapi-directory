package shared

type EffectivePolicy struct {
	PolicyArn      *string `json:"policyArn,omitempty"`
	PolicyDocument *string `json:"policyDocument,omitempty"`
	PolicyName     *string `json:"policyName,omitempty"`
}
