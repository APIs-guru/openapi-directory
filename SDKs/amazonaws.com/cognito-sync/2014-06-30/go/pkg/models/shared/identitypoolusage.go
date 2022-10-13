package shared

import (
	"time"
)

type IdentityPoolUsage struct {
	DataStorage       *int64     `json:"DataStorage"`
	IdentityPoolID    *string    `json:"IdentityPoolId"`
	LastModifiedDate  *time.Time `json:"LastModifiedDate"`
	SyncSessionsCount *int64     `json:"SyncSessionsCount"`
}
