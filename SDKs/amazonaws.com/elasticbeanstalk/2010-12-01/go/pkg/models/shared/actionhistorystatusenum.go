package shared

type ActionHistoryStatusEnum string

const (
	ActionHistoryStatusEnumCompleted ActionHistoryStatusEnum = "Completed"
	ActionHistoryStatusEnumFailed    ActionHistoryStatusEnum = "Failed"
	ActionHistoryStatusEnumUnknown   ActionHistoryStatusEnum = "Unknown"
)
