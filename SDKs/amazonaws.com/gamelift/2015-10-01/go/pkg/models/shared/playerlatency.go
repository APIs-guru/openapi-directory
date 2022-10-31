package shared



type PlayerLatency struct {
    LatencyInMilliseconds *float32 `json:"LatencyInMilliseconds,omitempty"`
    PlayerID *string `json:"PlayerId,omitempty"`
    RegionIdentifier *string `json:"RegionIdentifier,omitempty"`
    
}

