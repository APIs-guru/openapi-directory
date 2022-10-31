package shared

type GetPolicyResponse struct {
	Policy    *Policy `json:"Policy,omitempty"`
	PolicyArn *string `json:"PolicyArn,omitempty"`
}
