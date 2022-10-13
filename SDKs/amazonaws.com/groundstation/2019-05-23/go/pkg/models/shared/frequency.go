package shared

type Frequency struct {
	Units FrequencyUnitsEnum `json:"units"`
	Value float64            `json:"value"`
}
