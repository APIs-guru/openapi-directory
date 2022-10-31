package shared



type OutlierDetection struct {
    BaseEjectionDuration Duration `json:"baseEjectionDuration"`
    Interval Duration `json:"interval"`
    MaxEjectionPercent int64 `json:"maxEjectionPercent"`
    MaxServerErrors int64 `json:"maxServerErrors"`
    
}

