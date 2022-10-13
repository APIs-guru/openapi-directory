package shared

type CrossRegionCopyDeprecateRule struct {
	Interval     *int64                           `json:"Interval"`
	IntervalUnit *RetentionIntervalUnitValuesEnum `json:"IntervalUnit"`
}
