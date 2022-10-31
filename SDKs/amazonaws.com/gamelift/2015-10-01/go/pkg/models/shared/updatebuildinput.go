package shared

type UpdateBuildInput struct {
	BuildID string  `json:"BuildId"`
	Name    *string `json:"Name,omitempty"`
	Version *string `json:"Version,omitempty"`
}
