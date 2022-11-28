package shared

// MetricDimension
// The dimension of a metric.
type MetricDimension struct {
	DimensionName string                      `json:"dimensionName"`
	Operator      *DimensionValueOperatorEnum `json:"operator,omitempty"`
}
