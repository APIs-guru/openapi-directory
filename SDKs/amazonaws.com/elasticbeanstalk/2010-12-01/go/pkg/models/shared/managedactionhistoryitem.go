package shared

import (
	"time"
)

// ManagedActionHistoryItem
// The record of a completed or failed managed action.
type ManagedActionHistoryItem struct {
	ActionDescription  *string
	ActionID           *string
	ActionType         *ActionTypeEnum
	ExecutedTime       *time.Time
	FailureDescription *string
	FailureType        *FailureTypeEnum
	FinishedTime       *time.Time
	Status             *ActionHistoryStatusEnum
}
