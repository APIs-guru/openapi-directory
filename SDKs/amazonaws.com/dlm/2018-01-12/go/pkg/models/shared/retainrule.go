package shared

type RetainRule struct {
	Count        *int64                           `json:"Count"`
	Interval     *int64                           `json:"Interval"`
	IntervalUnit *RetentionIntervalUnitValuesEnum `json:"IntervalUnit"`
}
