package shared

type CrossRegionCopyRetainRule struct {
	Interval     *int64                           `json:"Interval"`
	IntervalUnit *RetentionIntervalUnitValuesEnum `json:"IntervalUnit"`
}
