package shared

// ErrorMetric
//
//	Provides detailed error metrics to evaluate the performance of a predictor. This object is part of the <a>Metrics</a> object.
type ErrorMetric struct {
	ForecastType *string  `json:"ForecastType,omitempty"`
	Mape         *float64 `json:"MAPE,omitempty"`
	Mase         *float64 `json:"MASE,omitempty"`
	Rmse         *float64 `json:"RMSE,omitempty"`
	Wape         *float64 `json:"WAPE,omitempty"`
}
