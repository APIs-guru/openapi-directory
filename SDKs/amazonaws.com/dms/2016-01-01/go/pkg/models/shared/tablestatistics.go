package shared

import (
	"time"
)

type TableStatistics struct {
	Ddls                         *int64     `json:"Ddls"`
	Deletes                      *int64     `json:"Deletes"`
	FullLoadCondtnlChkFailedRows *int64     `json:"FullLoadCondtnlChkFailedRows"`
	FullLoadEndTime              *time.Time `json:"FullLoadEndTime"`
	FullLoadErrorRows            *int64     `json:"FullLoadErrorRows"`
	FullLoadReloaded             *bool      `json:"FullLoadReloaded"`
	FullLoadRows                 *int64     `json:"FullLoadRows"`
	FullLoadStartTime            *time.Time `json:"FullLoadStartTime"`
	Inserts                      *int64     `json:"Inserts"`
	LastUpdateTime               *time.Time `json:"LastUpdateTime"`
	SchemaName                   *string    `json:"SchemaName"`
	TableName                    *string    `json:"TableName"`
	TableState                   *string    `json:"TableState"`
	Updates                      *int64     `json:"Updates"`
	ValidationFailedRecords      *int64     `json:"ValidationFailedRecords"`
	ValidationPendingRecords     *int64     `json:"ValidationPendingRecords"`
	ValidationState              *string    `json:"ValidationState"`
	ValidationStateDetails       *string    `json:"ValidationStateDetails"`
	ValidationSuspendedRecords   *int64     `json:"ValidationSuspendedRecords"`
}
