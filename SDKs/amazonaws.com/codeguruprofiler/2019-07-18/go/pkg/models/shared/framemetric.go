package shared

type FrameMetric struct {
	FrameName    string         `json:"frameName"`
	ThreadStates []string       `json:"threadStates"`
	Type         MetricTypeEnum `json:"type"`
}
