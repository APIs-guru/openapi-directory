package shared

type DeviceSelectionConfiguration struct {
	Filters    []DeviceFilter `json:"filters"`
	MaxDevices int64          `json:"maxDevices"`
}
