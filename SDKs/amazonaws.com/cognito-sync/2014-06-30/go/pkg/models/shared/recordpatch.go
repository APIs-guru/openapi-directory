package shared

import (
	"time"
)

// RecordPatch
// An update operation for a record.
type RecordPatch struct {
	DeviceLastModifiedDate *time.Time    `json:"DeviceLastModifiedDate,omitempty"`
	Key                    string        `json:"Key"`
	Op                     OperationEnum `json:"Op"`
	SyncCount              int64         `json:"SyncCount"`
	Value                  *string       `json:"Value,omitempty"`
}
