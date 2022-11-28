package shared

// EvaluateExpressionInput
// Contains the parameters for EvaluateExpression.
type EvaluateExpressionInput struct {
	Expression string `json:"expression"`
	ObjectID   string `json:"objectId"`
	PipelineID string `json:"pipelineId"`
}
