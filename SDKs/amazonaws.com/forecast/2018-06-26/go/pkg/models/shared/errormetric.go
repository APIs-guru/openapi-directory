package shared

type ErrorMetric struct {
	ForecastType *string  `json:"ForecastType"`
	Mape         *float64 `json:"MAPE"`
	Mase         *float64 `json:"MASE"`
	Rmse         *float64 `json:"RMSE"`
	Wape         *float64 `json:"WAPE"`
}
