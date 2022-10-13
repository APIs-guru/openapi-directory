package shared

import (
	"time"
)

type Record struct {
	DeviceLastModifiedDate *time.Time `json:"DeviceLastModifiedDate"`
	Key                    *string    `json:"Key"`
	LastModifiedBy         *string    `json:"LastModifiedBy"`
	LastModifiedDate       *time.Time `json:"LastModifiedDate"`
	SyncCount              *int64     `json:"SyncCount"`
	Value                  *string    `json:"Value"`
}
