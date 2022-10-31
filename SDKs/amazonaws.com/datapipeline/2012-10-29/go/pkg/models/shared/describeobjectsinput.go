package shared

type DescribeObjectsInput struct {
	EvaluateExpressions *bool    `json:"evaluateExpressions,omitempty"`
	Marker              *string  `json:"marker,omitempty"`
	ObjectIds           []string `json:"objectIds"`
	PipelineID          string   `json:"pipelineId"`
}
