package shared

// Location
// <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example, 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p>
type Location struct {
	Latitude  float64 `json:"latitude"`
	Longitude float64 `json:"longitude"`
}
