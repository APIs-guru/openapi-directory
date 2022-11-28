package shared

// SearchDevicesFilter
// The filter to use for searching devices.
type SearchDevicesFilter struct {
	Name   string   `json:"name"`
	Values []string `json:"values"`
}
