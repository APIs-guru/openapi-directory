package shared



type FindMatchesMetrics struct {
    AreaUnderPrCurve *float64 `json:"AreaUnderPRCurve,omitempty"`
    ColumnImportances []ColumnImportance `json:"ColumnImportances,omitempty"`
    ConfusionMatrix *ConfusionMatrix `json:"ConfusionMatrix,omitempty"`
    F1 *float64 `json:"F1,omitempty"`
    Precision *float64 `json:"Precision,omitempty"`
    Recall *float64 `json:"Recall,omitempty"`
    
}

