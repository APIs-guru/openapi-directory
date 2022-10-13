package shared

type UpdateBehaviorEnum string

const (
	UpdateBehaviorEnumLog              UpdateBehaviorEnum = "LOG"
	UpdateBehaviorEnumUpdateInDatabase UpdateBehaviorEnum = "UPDATE_IN_DATABASE"
)
