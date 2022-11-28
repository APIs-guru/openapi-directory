package shared

// PutActionRevisionOutput
// Represents the output of a <code>PutActionRevision</code> action.
type PutActionRevisionOutput struct {
	NewRevision         *bool   `json:"newRevision,omitempty"`
	PipelineExecutionID *string `json:"pipelineExecutionId,omitempty"`
}
