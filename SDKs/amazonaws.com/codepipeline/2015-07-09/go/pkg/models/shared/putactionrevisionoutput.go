package shared

type PutActionRevisionOutput struct {
	NewRevision         *bool   `json:"newRevision,omitempty"`
	PipelineExecutionID *string `json:"pipelineExecutionId,omitempty"`
}
