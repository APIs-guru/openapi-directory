package shared

// Eirp
// Object that represents EIRP.
type Eirp struct {
	Units EirpUnitsEnum `json:"units"`
	Value float64       `json:"value"`
}
