package shared

import (
	"time"
)

// SharedDirectory
// Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted.
type SharedDirectory struct {
	CreatedDateTime     *time.Time       `json:"CreatedDateTime,omitempty"`
	LastUpdatedDateTime *time.Time       `json:"LastUpdatedDateTime,omitempty"`
	OwnerAccountID      *string          `json:"OwnerAccountId,omitempty"`
	OwnerDirectoryID    *string          `json:"OwnerDirectoryId,omitempty"`
	ShareMethod         *ShareMethodEnum `json:"ShareMethod,omitempty"`
	ShareNotes          *string          `json:"ShareNotes,omitempty"`
	ShareStatus         *ShareStatusEnum `json:"ShareStatus,omitempty"`
	SharedAccountID     *string          `json:"SharedAccountId,omitempty"`
	SharedDirectoryID   *string          `json:"SharedDirectoryId,omitempty"`
}
