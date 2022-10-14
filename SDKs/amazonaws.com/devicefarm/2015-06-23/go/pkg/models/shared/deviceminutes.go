package shared

type DeviceMinutes struct {
	Metered   *float64 `json:"metered,omitempty"`
	Total     *float64 `json:"total,omitempty"`
	Unmetered *float64 `json:"unmetered,omitempty"`
}
