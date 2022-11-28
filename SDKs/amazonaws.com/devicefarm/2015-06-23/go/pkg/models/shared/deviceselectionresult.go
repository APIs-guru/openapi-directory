package shared

// DeviceSelectionResult
// Contains the run results requested by the device selection configuration and how many devices were returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>.
type DeviceSelectionResult struct {
	Filters             []DeviceFilter `json:"filters,omitempty"`
	MatchedDevicesCount *int64         `json:"matchedDevicesCount,omitempty"`
	MaxDevices          *int64         `json:"maxDevices,omitempty"`
}
