package shared

type GetAccuracyMetricsResponse struct {
	AutoMlOverrideStrategy     *AutoMlOverrideStrategyEnum `json:"AutoMLOverrideStrategy"`
	OptimizationMetric         *OptimizationMetricEnum     `json:"OptimizationMetric"`
	PredictorEvaluationResults []EvaluationResult          `json:"PredictorEvaluationResults"`
}
