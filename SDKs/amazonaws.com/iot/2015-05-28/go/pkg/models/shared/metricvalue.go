package shared



type MetricValue struct {
    Cidrs []string `json:"cidrs,omitempty"`
    Count *int64 `json:"count,omitempty"`
    Number *float64 `json:"number,omitempty"`
    Numbers []float64 `json:"numbers,omitempty"`
    Ports []int64 `json:"ports,omitempty"`
    Strings []string `json:"strings,omitempty"`
    
}

