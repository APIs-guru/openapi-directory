package shared

// CrossRegionCopyRetainRule
// Specifies the retention rule for cross-Region snapshot copies.
type CrossRegionCopyRetainRule struct {
	Interval     *int64                           `json:"Interval,omitempty"`
	IntervalUnit *RetentionIntervalUnitValuesEnum `json:"IntervalUnit,omitempty"`
}
