package shared

type SuiteRunConfiguration struct {
	PrimaryDevice    *DeviceUnderTest `json:"primaryDevice"`
	SelectedTestList []string         `json:"selectedTestList"`
}
