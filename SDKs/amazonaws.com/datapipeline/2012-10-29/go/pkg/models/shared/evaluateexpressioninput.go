package shared

type EvaluateExpressionInput struct {
	Expression string `json:"expression"`
	ObjectID   string `json:"objectId"`
	PipelineID string `json:"pipelineId"`
}
