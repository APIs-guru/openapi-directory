package shared

type EffectivePolicy struct {
	PolicyArn      *string `json:"policyArn"`
	PolicyDocument *string `json:"policyDocument"`
	PolicyName     *string `json:"policyName"`
}
