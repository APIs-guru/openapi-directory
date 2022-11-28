package shared

// RetainRule
// Specifies the retention rule for a lifecycle policy. You can retain snapshots based on either a count or a time interval.
type RetainRule struct {
	Count        *int64                           `json:"Count,omitempty"`
	Interval     *int64                           `json:"Interval,omitempty"`
	IntervalUnit *RetentionIntervalUnitValuesEnum `json:"IntervalUnit,omitempty"`
}
