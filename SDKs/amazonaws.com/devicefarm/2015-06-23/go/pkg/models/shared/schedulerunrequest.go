package shared

type ScheduleRunRequest struct {
	AppArn                       *string                       `json:"appArn"`
	Configuration                *ScheduleRunConfiguration     `json:"configuration"`
	DevicePoolArn                *string                       `json:"devicePoolArn"`
	DeviceSelectionConfiguration *DeviceSelectionConfiguration `json:"deviceSelectionConfiguration"`
	ExecutionConfiguration       *ExecutionConfiguration       `json:"executionConfiguration"`
	Name                         *string                       `json:"name"`
	ProjectArn                   string                        `json:"projectArn"`
	Test                         ScheduleRunTest               `json:"test"`
}
