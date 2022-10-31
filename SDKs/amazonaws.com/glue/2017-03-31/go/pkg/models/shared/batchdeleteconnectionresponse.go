package shared

type BatchDeleteConnectionResponse struct {
	Errors    map[string]ErrorDetail `json:"Errors,omitempty"`
	Succeeded []string               `json:"Succeeded,omitempty"`
}
