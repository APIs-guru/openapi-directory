package shared

type Duration struct {
	Unit  *DurationUnitEnum `json:"unit"`
	Value *int64            `json:"value"`
}
