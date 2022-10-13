package shared

type DeviceMinutes struct {
	Metered   *float64 `json:"metered"`
	Total     *float64 `json:"total"`
	Unmetered *float64 `json:"unmetered"`
}
