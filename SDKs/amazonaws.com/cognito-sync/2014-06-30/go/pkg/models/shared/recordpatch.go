package shared

import (
	"time"
)

type RecordPatch struct {
	DeviceLastModifiedDate *time.Time    `json:"DeviceLastModifiedDate"`
	Key                    string        `json:"Key"`
	Op                     OperationEnum `json:"Op"`
	SyncCount              int64         `json:"SyncCount"`
	Value                  *string       `json:"Value"`
}
