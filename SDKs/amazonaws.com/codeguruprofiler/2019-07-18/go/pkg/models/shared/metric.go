package shared

// Metric
//
//	Details about the metric that the analysis used when it detected the anomaly. The metric what is analyzed to create recommendations. It includes the name of the frame that was analyzed and the type and thread states used to derive the metric value for that frame.
type Metric struct {
	FrameName    string         `json:"frameName"`
	ThreadStates []string       `json:"threadStates"`
	Type         MetricTypeEnum `json:"type"`
}
