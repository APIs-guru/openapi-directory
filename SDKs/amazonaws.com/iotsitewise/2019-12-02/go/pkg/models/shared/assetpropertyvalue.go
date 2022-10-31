package shared



type AssetPropertyValue struct {
    Quality *QualityEnum `json:"quality,omitempty"`
    Timestamp TimeInNanos `json:"timestamp"`
    Value Variant `json:"value"`
    
}

