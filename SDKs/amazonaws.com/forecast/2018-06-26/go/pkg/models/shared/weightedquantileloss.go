package shared

// WeightedQuantileLoss
// The weighted loss value for a quantile. This object is part of the <a>Metrics</a> object.
type WeightedQuantileLoss struct {
	LossValue *float64 `json:"LossValue,omitempty"`
	Quantile  *float64 `json:"Quantile,omitempty"`
}
