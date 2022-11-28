package shared

import (
	"time"
)

// OptionStatus
// The status of an option, including when it was last updated and whether it is actively in use for searches.
type OptionStatus struct {
	CreationDate    time.Time
	PendingDeletion *bool
	State           OptionStateEnum
	UpdateDate      time.Time
	UpdateVersion   *int64
}
