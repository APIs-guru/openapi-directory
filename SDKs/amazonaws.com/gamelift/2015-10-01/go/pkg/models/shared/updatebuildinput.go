package shared

// UpdateBuildInput
// Represents the input for a request operation.
type UpdateBuildInput struct {
	BuildID string  `json:"BuildId"`
	Name    *string `json:"Name,omitempty"`
	Version *string `json:"Version,omitempty"`
}
