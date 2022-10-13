package shared

type InstanceStatusEnum string

const (
	InstanceStatusEnumPending    InstanceStatusEnum = "Pending"
	InstanceStatusEnumInProgress InstanceStatusEnum = "InProgress"
	InstanceStatusEnumSucceeded  InstanceStatusEnum = "Succeeded"
	InstanceStatusEnumFailed     InstanceStatusEnum = "Failed"
	InstanceStatusEnumSkipped    InstanceStatusEnum = "Skipped"
	InstanceStatusEnumUnknown    InstanceStatusEnum = "Unknown"
	InstanceStatusEnumReady      InstanceStatusEnum = "Ready"
)
