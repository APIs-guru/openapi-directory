package shared

type CalculatedSpend struct {
	ActualSpend     Spend  `json:"ActualSpend"`
	ForecastedSpend *Spend `json:"ForecastedSpend,omitempty"`
}
