package shared

type PutActionRevisionOutput struct {
	NewRevision         *bool   `json:"newRevision"`
	PipelineExecutionID *string `json:"pipelineExecutionId"`
}
