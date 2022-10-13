package shared

type Metrics struct {
	AverageWeightedQuantileLoss *float64               `json:"AverageWeightedQuantileLoss"`
	ErrorMetrics                []ErrorMetric          `json:"ErrorMetrics"`
	Rmse                        *float64               `json:"RMSE"`
	WeightedQuantileLosses      []WeightedQuantileLoss `json:"WeightedQuantileLosses"`
}
