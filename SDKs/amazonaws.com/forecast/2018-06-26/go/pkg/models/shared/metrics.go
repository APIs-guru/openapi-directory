package shared

type Metrics struct {
	AverageWeightedQuantileLoss *float64               `json:"AverageWeightedQuantileLoss,omitempty"`
	ErrorMetrics                []ErrorMetric          `json:"ErrorMetrics,omitempty"`
	Rmse                        *float64               `json:"RMSE,omitempty"`
	WeightedQuantileLosses      []WeightedQuantileLoss `json:"WeightedQuantileLosses,omitempty"`
}
