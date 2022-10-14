package shared

type GetComponentResponse struct {
	Component *Component `json:"component,omitempty"`
	RequestID *string    `json:"requestId,omitempty"`
}
