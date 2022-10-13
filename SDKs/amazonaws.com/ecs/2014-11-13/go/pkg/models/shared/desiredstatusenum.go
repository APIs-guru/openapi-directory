package shared

type DesiredStatusEnum string

const (
	DesiredStatusEnumRunning DesiredStatusEnum = "RUNNING"
	DesiredStatusEnumPending DesiredStatusEnum = "PENDING"
	DesiredStatusEnumStopped DesiredStatusEnum = "STOPPED"
)
