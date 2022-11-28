package shared

// SetStatusInput
// Contains the parameters for SetStatus.
type SetStatusInput struct {
	ObjectIds  []string `json:"objectIds"`
	PipelineID string   `json:"pipelineId"`
	Status     string   `json:"status"`
}
