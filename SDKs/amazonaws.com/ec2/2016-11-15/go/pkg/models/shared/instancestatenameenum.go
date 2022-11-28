package shared

type InstanceStateNameEnum string

const (
	InstanceStateNameEnumPending      InstanceStateNameEnum = "pending"
	InstanceStateNameEnumRunning      InstanceStateNameEnum = "running"
	InstanceStateNameEnumShuttingDown InstanceStateNameEnum = "shutting-down"
	InstanceStateNameEnumTerminated   InstanceStateNameEnum = "terminated"
	InstanceStateNameEnumStopping     InstanceStateNameEnum = "stopping"
	InstanceStateNameEnumStopped      InstanceStateNameEnum = "stopped"
)
