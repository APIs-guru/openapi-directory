package shared



type EbsUtilizationMetric struct {
    Name *EbsMetricNameEnum `json:"name,omitempty"`
    Statistic *MetricStatisticEnum `json:"statistic,omitempty"`
    Value *float64 `json:"value,omitempty"`
    
}

