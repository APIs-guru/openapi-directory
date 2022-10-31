package shared

type ErrorMetric struct {
	ForecastType *string  `json:"ForecastType,omitempty"`
	Mape         *float64 `json:"MAPE,omitempty"`
	Mase         *float64 `json:"MASE,omitempty"`
	Rmse         *float64 `json:"RMSE,omitempty"`
	Wape         *float64 `json:"WAPE,omitempty"`
}
