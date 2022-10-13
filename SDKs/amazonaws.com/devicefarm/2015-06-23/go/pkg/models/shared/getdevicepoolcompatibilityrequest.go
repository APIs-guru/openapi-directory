package shared

type GetDevicePoolCompatibilityRequest struct {
	AppArn        *string                   `json:"appArn"`
	Configuration *ScheduleRunConfiguration `json:"configuration"`
	DevicePoolArn string                    `json:"devicePoolArn"`
	Test          *ScheduleRunTest          `json:"test"`
	TestType      *TestTypeEnum             `json:"testType"`
}
