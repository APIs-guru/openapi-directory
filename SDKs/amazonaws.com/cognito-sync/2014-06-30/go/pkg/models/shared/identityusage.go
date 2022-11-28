package shared

import (
	"time"
)

// IdentityUsage
// Usage information for the identity.
type IdentityUsage struct {
	DataStorage      *int64     `json:"DataStorage,omitempty"`
	DatasetCount     *int64     `json:"DatasetCount,omitempty"`
	IdentityID       *string    `json:"IdentityId,omitempty"`
	IdentityPoolID   *string    `json:"IdentityPoolId,omitempty"`
	LastModifiedDate *time.Time `json:"LastModifiedDate,omitempty"`
}
