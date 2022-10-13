package shared

type FindMatchesMetrics struct {
	AreaUnderPrCurve  *float64           `json:"AreaUnderPRCurve"`
	ColumnImportances []ColumnImportance `json:"ColumnImportances"`
	ConfusionMatrix   *ConfusionMatrix   `json:"ConfusionMatrix"`
	F1                *float64           `json:"F1"`
	Precision         *float64           `json:"Precision"`
	Recall            *float64           `json:"Recall"`
}
