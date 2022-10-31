package shared



type SuiteRunConfiguration struct {
    PrimaryDevice *DeviceUnderTest `json:"primaryDevice,omitempty"`
    SelectedTestList []string `json:"selectedTestList,omitempty"`
    
}

