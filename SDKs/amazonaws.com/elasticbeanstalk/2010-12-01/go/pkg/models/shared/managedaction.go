package shared

import (
	"time"
)

// ManagedAction
// The record of an upcoming or in-progress managed action.
type ManagedAction struct {
	ActionDescription *string
	ActionID          *string
	ActionType        *ActionTypeEnum
	Status            *ActionStatusEnum
	WindowStartTime   *time.Time
}
