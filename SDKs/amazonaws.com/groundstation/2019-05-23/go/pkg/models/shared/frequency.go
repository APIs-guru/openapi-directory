package shared

// Frequency
// Object that describes the frequency.
type Frequency struct {
	Units FrequencyUnitsEnum `json:"units"`
	Value float64            `json:"value"`
}
