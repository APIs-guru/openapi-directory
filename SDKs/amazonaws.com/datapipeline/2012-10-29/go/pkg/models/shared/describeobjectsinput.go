package shared

type DescribeObjectsInput struct {
	EvaluateExpressions *bool    `json:"evaluateExpressions"`
	Marker              *string  `json:"marker"`
	ObjectIds           []string `json:"objectIds"`
	PipelineID          string   `json:"pipelineId"`
}
