package shared



type Metric struct {
    FrameName string `json:"frameName"`
    ThreadStates []string `json:"threadStates"`
    Type MetricTypeEnum `json:"type"`
    
}

