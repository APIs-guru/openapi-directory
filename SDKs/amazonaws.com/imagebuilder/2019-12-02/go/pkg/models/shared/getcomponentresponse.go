package shared

type GetComponentResponse struct {
	Component *Component `json:"component"`
	RequestID *string    `json:"requestId"`
}
