package shared

type MonitoringStateEnum string

const (
	MonitoringStateEnumDisabled  MonitoringStateEnum = "disabled"
	MonitoringStateEnumDisabling MonitoringStateEnum = "disabling"
	MonitoringStateEnumEnabled   MonitoringStateEnum = "enabled"
	MonitoringStateEnumPending   MonitoringStateEnum = "pending"
)
