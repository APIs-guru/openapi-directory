package shared



type FindMatchesParameters struct {
    AccuracyCostTradeoff *float64 `json:"AccuracyCostTradeoff,omitempty"`
    EnforceProvidedLabels *bool `json:"EnforceProvidedLabels,omitempty"`
    PrecisionRecallTradeoff *float64 `json:"PrecisionRecallTradeoff,omitempty"`
    PrimaryKeyColumnName *string `json:"PrimaryKeyColumnName,omitempty"`
    
}

