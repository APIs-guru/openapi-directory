package shared

type PutApprovalResultInput struct {
	ActionName   string         `json:"actionName"`
	PipelineName string         `json:"pipelineName"`
	Result       ApprovalResult `json:"result"`
	StageName    string         `json:"stageName"`
	Token        string         `json:"token"`
}
