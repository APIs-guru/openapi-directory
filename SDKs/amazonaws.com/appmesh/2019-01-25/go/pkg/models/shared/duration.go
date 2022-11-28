package shared

// Duration
// An object that represents a duration of time.
type Duration struct {
	Unit  *DurationUnitEnum `json:"unit,omitempty"`
	Value *int64            `json:"value,omitempty"`
}
