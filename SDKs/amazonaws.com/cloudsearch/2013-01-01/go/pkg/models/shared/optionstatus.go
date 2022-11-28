package shared

import (
	"time"
)

// OptionStatus
// The status of domain configuration option.
type OptionStatus struct {
	CreationDate    time.Time
	PendingDeletion *bool
	State           OptionStateEnum
	UpdateDate      time.Time
	UpdateVersion   *int64
}
