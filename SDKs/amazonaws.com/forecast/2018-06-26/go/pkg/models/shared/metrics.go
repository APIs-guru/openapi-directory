package shared

// Metrics
// Provides metrics that are used to evaluate the performance of a predictor. This object is part of the <a>WindowSummary</a> object.
type Metrics struct {
	AverageWeightedQuantileLoss *float64               `json:"AverageWeightedQuantileLoss,omitempty"`
	ErrorMetrics                []ErrorMetric          `json:"ErrorMetrics,omitempty"`
	Rmse                        *float64               `json:"RMSE,omitempty"`
	WeightedQuantileLosses      []WeightedQuantileLoss `json:"WeightedQuantileLosses,omitempty"`
}
