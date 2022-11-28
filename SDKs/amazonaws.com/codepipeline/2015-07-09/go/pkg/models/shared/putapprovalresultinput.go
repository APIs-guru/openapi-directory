package shared

// PutApprovalResultInput
// Represents the input of a <code>PutApprovalResult</code> action.
type PutApprovalResultInput struct {
	ActionName   string         `json:"actionName"`
	PipelineName string         `json:"pipelineName"`
	Result       ApprovalResult `json:"result"`
	StageName    string         `json:"stageName"`
	Token        string         `json:"token"`
}
