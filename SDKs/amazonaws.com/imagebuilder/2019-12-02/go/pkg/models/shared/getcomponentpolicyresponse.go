package shared

type GetComponentPolicyResponse struct {
	Policy    *string `json:"policy"`
	RequestID *string `json:"requestId"`
}
