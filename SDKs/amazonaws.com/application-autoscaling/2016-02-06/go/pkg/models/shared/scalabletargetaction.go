package shared



type ScalableTargetAction struct {
    MaxCapacity *int64 `json:"MaxCapacity,omitempty"`
    MinCapacity *int64 `json:"MinCapacity,omitempty"`
    
}

