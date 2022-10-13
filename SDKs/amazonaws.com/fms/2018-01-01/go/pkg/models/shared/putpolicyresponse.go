package shared

type PutPolicyResponse struct {
	Policy    *Policy `json:"Policy"`
	PolicyArn *string `json:"PolicyArn"`
}
