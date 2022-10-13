package shared

import (
	"time"
)

type SharedDirectory struct {
	CreatedDateTime     *time.Time       `json:"CreatedDateTime"`
	LastUpdatedDateTime *time.Time       `json:"LastUpdatedDateTime"`
	OwnerAccountID      *string          `json:"OwnerAccountId"`
	OwnerDirectoryID    *string          `json:"OwnerDirectoryId"`
	ShareMethod         *ShareMethodEnum `json:"ShareMethod"`
	ShareNotes          *string          `json:"ShareNotes"`
	ShareStatus         *ShareStatusEnum `json:"ShareStatus"`
	SharedAccountID     *string          `json:"SharedAccountId"`
	SharedDirectoryID   *string          `json:"SharedDirectoryId"`
}
