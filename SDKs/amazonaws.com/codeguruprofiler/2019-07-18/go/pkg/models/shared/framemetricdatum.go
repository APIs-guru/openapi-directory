package shared

type FrameMetricDatum struct {
	FrameMetric FrameMetric `json:"frameMetric"`
	Values      []float64   `json:"values"`
}
