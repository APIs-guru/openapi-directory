package shared

// SuiteRunConfiguration
// Gets suite run configuration.
type SuiteRunConfiguration struct {
	PrimaryDevice    *DeviceUnderTest `json:"primaryDevice,omitempty"`
	SelectedTestList []string         `json:"selectedTestList,omitempty"`
}
