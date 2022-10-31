package shared



type LambdaFunctionMemoryProjectedMetric struct {
    Name *LambdaFunctionMemoryMetricNameEnum `json:"name,omitempty"`
    Statistic *LambdaFunctionMemoryMetricStatisticEnum `json:"statistic,omitempty"`
    Value *float64 `json:"value,omitempty"`
    
}

