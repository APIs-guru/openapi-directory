package shared

import (
	"time"
)

// IdentityPoolUsage
// Usage information for the identity pool.
type IdentityPoolUsage struct {
	DataStorage       *int64     `json:"DataStorage,omitempty"`
	IdentityPoolID    *string    `json:"IdentityPoolId,omitempty"`
	LastModifiedDate  *time.Time `json:"LastModifiedDate,omitempty"`
	SyncSessionsCount *int64     `json:"SyncSessionsCount,omitempty"`
}
