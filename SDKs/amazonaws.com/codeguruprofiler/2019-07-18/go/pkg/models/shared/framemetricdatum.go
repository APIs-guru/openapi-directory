package shared

// FrameMetricDatum
//
//	Information about a frame metric and its values.
type FrameMetricDatum struct {
	FrameMetric FrameMetric `json:"frameMetric"`
	Values      []float64   `json:"values"`
}
