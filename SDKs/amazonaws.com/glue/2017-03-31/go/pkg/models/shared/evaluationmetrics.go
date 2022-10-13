package shared

type EvaluationMetrics struct {
	FindMatchesMetrics *FindMatchesMetrics `json:"FindMatchesMetrics"`
	TransformType      TransformTypeEnum   `json:"TransformType"`
}
