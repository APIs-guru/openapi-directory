package shared



type AssetPropertyValue struct {
    Quality *string `json:"quality,omitempty"`
    Timestamp AssetPropertyTimestamp `json:"timestamp"`
    Value AssetPropertyVariant `json:"value"`
    
}

