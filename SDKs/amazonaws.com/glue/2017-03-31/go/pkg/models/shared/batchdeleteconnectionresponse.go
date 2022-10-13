package shared

type BatchDeleteConnectionResponse struct {
	Errors    map[string]ErrorDetail `json:"Errors"`
	Succeeded []string               `json:"Succeeded"`
}
