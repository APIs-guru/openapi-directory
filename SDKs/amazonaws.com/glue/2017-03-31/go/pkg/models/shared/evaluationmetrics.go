package shared

type EvaluationMetrics struct {
	FindMatchesMetrics *FindMatchesMetrics `json:"FindMatchesMetrics,omitempty"`
	TransformType      TransformTypeEnum   `json:"TransformType"`
}
