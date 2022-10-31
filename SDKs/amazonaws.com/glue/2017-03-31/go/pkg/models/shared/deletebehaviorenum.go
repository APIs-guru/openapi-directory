package shared

type DeleteBehaviorEnum string

const (
	DeleteBehaviorEnumLog                 DeleteBehaviorEnum = "LOG"
	DeleteBehaviorEnumDeleteFromDatabase  DeleteBehaviorEnum = "DELETE_FROM_DATABASE"
	DeleteBehaviorEnumDeprecateInDatabase DeleteBehaviorEnum = "DEPRECATE_IN_DATABASE"
)
