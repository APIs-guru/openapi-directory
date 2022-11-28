package shared

// FrameMetric
//
//	The frame name, metric type, and thread states. These are used to derive the value of the metric for the frame.
type FrameMetric struct {
	FrameName    string         `json:"frameName"`
	ThreadStates []string       `json:"threadStates"`
	Type         MetricTypeEnum `json:"type"`
}
