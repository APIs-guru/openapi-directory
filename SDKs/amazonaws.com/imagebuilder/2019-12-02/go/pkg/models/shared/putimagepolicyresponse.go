package shared

type PutImagePolicyResponse struct {
	ImageArn  *string `json:"imageArn,omitempty"`
	RequestID *string `json:"requestId,omitempty"`
}
