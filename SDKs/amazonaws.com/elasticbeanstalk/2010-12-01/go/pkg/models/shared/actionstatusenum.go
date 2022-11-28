package shared

type ActionStatusEnum string

const (
	ActionStatusEnumScheduled ActionStatusEnum = "Scheduled"
	ActionStatusEnumPending   ActionStatusEnum = "Pending"
	ActionStatusEnumRunning   ActionStatusEnum = "Running"
	ActionStatusEnumUnknown   ActionStatusEnum = "Unknown"
)
