package shared

type Duration struct {
	Unit  *DurationUnitEnum `json:"unit,omitempty"`
	Value *int64            `json:"value,omitempty"`
}
