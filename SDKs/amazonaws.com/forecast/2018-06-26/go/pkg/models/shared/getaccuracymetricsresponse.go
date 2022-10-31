package shared

type GetAccuracyMetricsResponse struct {
	AutoMlOverrideStrategy     *AutoMlOverrideStrategyEnum `json:"AutoMLOverrideStrategy,omitempty"`
	OptimizationMetric         *OptimizationMetricEnum     `json:"OptimizationMetric,omitempty"`
	PredictorEvaluationResults []EvaluationResult          `json:"PredictorEvaluationResults,omitempty"`
}
