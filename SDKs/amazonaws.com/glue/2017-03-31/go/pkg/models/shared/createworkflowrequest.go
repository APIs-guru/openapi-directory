package shared

type CreateWorkflowRequest struct {
	DefaultRunProperties map[string]string `json:"DefaultRunProperties"`
	Description          *string           `json:"Description"`
	MaxConcurrentRuns    *int64            `json:"MaxConcurrentRuns"`
	Name                 string            `json:"Name"`
	Tags                 map[string]string `json:"Tags"`
}
