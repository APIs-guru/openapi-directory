package shared

// DeviceMinutes
// Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children.
type DeviceMinutes struct {
	Metered   *float64 `json:"metered,omitempty"`
	Total     *float64 `json:"total,omitempty"`
	Unmetered *float64 `json:"unmetered,omitempty"`
}
