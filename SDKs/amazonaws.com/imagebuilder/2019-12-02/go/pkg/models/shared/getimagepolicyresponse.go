package shared

type GetImagePolicyResponse struct {
	Policy    *string `json:"policy,omitempty"`
	RequestID *string `json:"requestId,omitempty"`
}
