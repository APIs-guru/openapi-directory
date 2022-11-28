package shared

// Scale
// A floating-point percentage of the desired number of tasks to place and keep running in the task set.
type Scale struct {
	Unit  *ScaleUnitEnum `json:"unit,omitempty"`
	Value *float64       `json:"value,omitempty"`
}
