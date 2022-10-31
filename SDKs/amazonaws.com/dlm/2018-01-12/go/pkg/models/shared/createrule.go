package shared



type CreateRule struct {
    CronExpression *string `json:"CronExpression,omitempty"`
    Interval *int64 `json:"Interval,omitempty"`
    IntervalUnit *IntervalUnitValuesEnum `json:"IntervalUnit,omitempty"`
    Location *LocationValuesEnum `json:"Location,omitempty"`
    Times []string `json:"Times,omitempty"`
    
}

