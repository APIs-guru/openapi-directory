package shared

import (
	"time"
)

type IdentityUsage struct {
	DataStorage      *int64     `json:"DataStorage"`
	DatasetCount     *int64     `json:"DatasetCount"`
	IdentityID       *string    `json:"IdentityId"`
	IdentityPoolID   *string    `json:"IdentityPoolId"`
	LastModifiedDate *time.Time `json:"LastModifiedDate"`
}
