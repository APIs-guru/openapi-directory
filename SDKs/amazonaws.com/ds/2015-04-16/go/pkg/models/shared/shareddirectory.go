package shared

import (
"time")

type SharedDirectory struct {
    CreatedDateTime *time.Time `json:"CreatedDateTime,omitempty"`
    LastUpdatedDateTime *time.Time `json:"LastUpdatedDateTime,omitempty"`
    OwnerAccountID *string `json:"OwnerAccountId,omitempty"`
    OwnerDirectoryID *string `json:"OwnerDirectoryId,omitempty"`
    ShareMethod *ShareMethodEnum `json:"ShareMethod,omitempty"`
    ShareNotes *string `json:"ShareNotes,omitempty"`
    ShareStatus *ShareStatusEnum `json:"ShareStatus,omitempty"`
    SharedAccountID *string `json:"SharedAccountId,omitempty"`
    SharedDirectoryID *string `json:"SharedDirectoryId,omitempty"`
    
}

