package shared

type Policy struct {
	PolicyArn  *string `json:"policyArn,omitempty"`
	PolicyName *string `json:"policyName,omitempty"`
}
