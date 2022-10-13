package shared

type DeviceSelectionResult struct {
	Filters             []DeviceFilter `json:"filters"`
	MatchedDevicesCount *int64         `json:"matchedDevicesCount"`
	MaxDevices          *int64         `json:"maxDevices"`
}
