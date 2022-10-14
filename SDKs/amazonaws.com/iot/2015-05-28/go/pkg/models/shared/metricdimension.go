package shared

type MetricDimension struct {
	DimensionName string                      `json:"dimensionName"`
	Operator      *DimensionValueOperatorEnum `json:"operator,omitempty"`
}
