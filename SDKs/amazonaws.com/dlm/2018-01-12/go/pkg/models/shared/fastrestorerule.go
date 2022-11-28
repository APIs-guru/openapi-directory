package shared

// FastRestoreRule
// Specifies a rule for enabling fast snapshot restore. You can enable fast snapshot restore based on either a count or a time interval.
type FastRestoreRule struct {
	AvailabilityZones []string                         `json:"AvailabilityZones"`
	Count             *int64                           `json:"Count,omitempty"`
	Interval          *int64                           `json:"Interval,omitempty"`
	IntervalUnit      *RetentionIntervalUnitValuesEnum `json:"IntervalUnit,omitempty"`
}
