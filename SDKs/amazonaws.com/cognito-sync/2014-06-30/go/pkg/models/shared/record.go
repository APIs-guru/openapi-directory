package shared

import (
	"time"
)

type Record struct {
	DeviceLastModifiedDate *time.Time `json:"DeviceLastModifiedDate,omitempty"`
	Key                    *string    `json:"Key,omitempty"`
	LastModifiedBy         *string    `json:"LastModifiedBy,omitempty"`
	LastModifiedDate       *time.Time `json:"LastModifiedDate,omitempty"`
	SyncCount              *int64     `json:"SyncCount,omitempty"`
	Value                  *string    `json:"Value,omitempty"`
}
