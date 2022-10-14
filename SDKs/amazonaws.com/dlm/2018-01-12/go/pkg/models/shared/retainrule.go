package shared

type RetainRule struct {
	Count        *int64                           `json:"Count,omitempty"`
	Interval     *int64                           `json:"Interval,omitempty"`
	IntervalUnit *RetentionIntervalUnitValuesEnum `json:"IntervalUnit,omitempty"`
}
