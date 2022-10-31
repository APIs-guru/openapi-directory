package shared

type OptimizationMetricEnum string

const (
	OptimizationMetricEnumWape                        OptimizationMetricEnum = "WAPE"
	OptimizationMetricEnumRmse                        OptimizationMetricEnum = "RMSE"
	OptimizationMetricEnumAverageWeightedQuantileLoss OptimizationMetricEnum = "AverageWeightedQuantileLoss"
	OptimizationMetricEnumMase                        OptimizationMetricEnum = "MASE"
	OptimizationMetricEnumMape                        OptimizationMetricEnum = "MAPE"
)
