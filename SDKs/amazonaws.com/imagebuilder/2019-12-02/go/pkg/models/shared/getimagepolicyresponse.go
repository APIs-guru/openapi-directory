package shared

type GetImagePolicyResponse struct {
	Policy    *string `json:"policy"`
	RequestID *string `json:"requestId"`
}
