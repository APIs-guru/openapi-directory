package shared

type FindMatchesParameters struct {
	AccuracyCostTradeoff    *float64 `json:"AccuracyCostTradeoff"`
	EnforceProvidedLabels   *bool    `json:"EnforceProvidedLabels"`
	PrecisionRecallTradeoff *float64 `json:"PrecisionRecallTradeoff"`
	PrimaryKeyColumnName    *string  `json:"PrimaryKeyColumnName"`
}
