package shared

// DeprecateRule
// Specifies an AMI deprecation rule for a schedule.
type DeprecateRule struct {
	Count        *int64                           `json:"Count,omitempty"`
	Interval     *int64                           `json:"Interval,omitempty"`
	IntervalUnit *RetentionIntervalUnitValuesEnum `json:"IntervalUnit,omitempty"`
}
