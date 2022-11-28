package shared

// FindMatchesParameters
// The parameters to configure the find matches transform.
type FindMatchesParameters struct {
	AccuracyCostTradeoff    *float64 `json:"AccuracyCostTradeoff,omitempty"`
	EnforceProvidedLabels   *bool    `json:"EnforceProvidedLabels,omitempty"`
	PrecisionRecallTradeoff *float64 `json:"PrecisionRecallTradeoff,omitempty"`
	PrimaryKeyColumnName    *string  `json:"PrimaryKeyColumnName,omitempty"`
}
