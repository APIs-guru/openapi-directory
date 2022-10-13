package shared

type LifecycleEventStatusEnum string

const (
	LifecycleEventStatusEnumPending    LifecycleEventStatusEnum = "Pending"
	LifecycleEventStatusEnumInProgress LifecycleEventStatusEnum = "InProgress"
	LifecycleEventStatusEnumSucceeded  LifecycleEventStatusEnum = "Succeeded"
	LifecycleEventStatusEnumFailed     LifecycleEventStatusEnum = "Failed"
	LifecycleEventStatusEnumSkipped    LifecycleEventStatusEnum = "Skipped"
	LifecycleEventStatusEnumUnknown    LifecycleEventStatusEnum = "Unknown"
)
