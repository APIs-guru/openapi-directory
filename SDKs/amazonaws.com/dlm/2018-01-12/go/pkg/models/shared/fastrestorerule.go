package shared

type FastRestoreRule struct {
	AvailabilityZones []string                         `json:"AvailabilityZones"`
	Count             *int64                           `json:"Count,omitempty"`
	Interval          *int64                           `json:"Interval,omitempty"`
	IntervalUnit      *RetentionIntervalUnitValuesEnum `json:"IntervalUnit,omitempty"`
}
