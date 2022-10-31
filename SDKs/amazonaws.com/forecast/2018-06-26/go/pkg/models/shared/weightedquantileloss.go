package shared



type WeightedQuantileLoss struct {
    LossValue *float64 `json:"LossValue,omitempty"`
    Quantile *float64 `json:"Quantile,omitempty"`
    
}

