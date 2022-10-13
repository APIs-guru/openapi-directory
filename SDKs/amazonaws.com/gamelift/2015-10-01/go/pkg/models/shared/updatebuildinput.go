package shared

type UpdateBuildInput struct {
	BuildID string  `json:"BuildId"`
	Name    *string `json:"Name"`
	Version *string `json:"Version"`
}
