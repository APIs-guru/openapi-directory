package shared



type GetDevicePoolCompatibilityRequest struct {
    AppArn *string `json:"appArn,omitempty"`
    Configuration *ScheduleRunConfiguration `json:"configuration,omitempty"`
    DevicePoolArn string `json:"devicePoolArn"`
    Test *ScheduleRunTest `json:"test,omitempty"`
    TestType *TestTypeEnum `json:"testType,omitempty"`
    
}

