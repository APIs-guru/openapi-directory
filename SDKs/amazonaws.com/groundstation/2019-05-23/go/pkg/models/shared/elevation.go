package shared

// Elevation
// Elevation angle of the satellite in the sky during a contact.
type Elevation struct {
	Unit  AngleUnitsEnum `json:"unit"`
	Value float64        `json:"value"`
}
