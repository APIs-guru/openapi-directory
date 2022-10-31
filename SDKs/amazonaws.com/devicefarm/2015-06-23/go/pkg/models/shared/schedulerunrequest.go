package shared



type ScheduleRunRequest struct {
    AppArn *string `json:"appArn,omitempty"`
    Configuration *ScheduleRunConfiguration `json:"configuration,omitempty"`
    DevicePoolArn *string `json:"devicePoolArn,omitempty"`
    DeviceSelectionConfiguration *DeviceSelectionConfiguration `json:"deviceSelectionConfiguration,omitempty"`
    ExecutionConfiguration *ExecutionConfiguration `json:"executionConfiguration,omitempty"`
    Name *string `json:"name,omitempty"`
    ProjectArn string `json:"projectArn"`
    Test ScheduleRunTest `json:"test"`
    
}

