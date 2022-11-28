package shared

// CrossRegionCopyDeprecateRule
// Specifies an AMI deprecation rule for cross-Region AMI copies created by a cross-Region copy rule.
type CrossRegionCopyDeprecateRule struct {
	Interval     *int64                           `json:"Interval,omitempty"`
	IntervalUnit *RetentionIntervalUnitValuesEnum `json:"IntervalUnit,omitempty"`
}
