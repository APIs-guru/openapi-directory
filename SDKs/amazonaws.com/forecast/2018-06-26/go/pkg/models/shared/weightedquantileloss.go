package shared

type WeightedQuantileLoss struct {
	LossValue *float64 `json:"LossValue"`
	Quantile  *float64 `json:"Quantile"`
}
