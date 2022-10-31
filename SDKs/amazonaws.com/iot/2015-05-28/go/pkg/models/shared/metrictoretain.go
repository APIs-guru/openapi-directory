package shared



type MetricToRetain struct {
    Metric string `json:"metric"`
    MetricDimension *MetricDimension `json:"metricDimension,omitempty"`
    
}

