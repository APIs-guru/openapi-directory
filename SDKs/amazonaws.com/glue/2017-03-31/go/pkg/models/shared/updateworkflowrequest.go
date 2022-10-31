package shared

type UpdateWorkflowRequest struct {
	DefaultRunProperties map[string]string `json:"DefaultRunProperties,omitempty"`
	Description          *string           `json:"Description,omitempty"`
	MaxConcurrentRuns    *int64            `json:"MaxConcurrentRuns,omitempty"`
	Name                 string            `json:"Name"`
}
