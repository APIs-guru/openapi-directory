package shared

type FastRestoreRule struct {
	AvailabilityZones []string                         `json:"AvailabilityZones"`
	Count             *int64                           `json:"Count"`
	Interval          *int64                           `json:"Interval"`
	IntervalUnit      *RetentionIntervalUnitValuesEnum `json:"IntervalUnit"`
}
