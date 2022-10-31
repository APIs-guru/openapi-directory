package shared



type Pattern struct {
    CountersToAggregate []string `json:"countersToAggregate,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    ResolutionSteps *string `json:"resolutionSteps,omitempty"`
    TargetFrames [][]string `json:"targetFrames,omitempty"`
    ThresholdPercent *float64 `json:"thresholdPercent,omitempty"`
    
}

