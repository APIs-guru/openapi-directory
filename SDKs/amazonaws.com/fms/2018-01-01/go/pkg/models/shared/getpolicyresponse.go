package shared

type GetPolicyResponse struct {
	Policy    *Policy `json:"Policy"`
	PolicyArn *string `json:"PolicyArn"`
}
