package shared

// DeviceSelectionConfiguration
// Represents the device filters used in a test run and the maximum number of devices to be included in the run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>.
type DeviceSelectionConfiguration struct {
	Filters    []DeviceFilter `json:"filters"`
	MaxDevices int64          `json:"maxDevices"`
}
