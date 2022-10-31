package shared

import (
"time")

type TableStatistics struct {
    Ddls *int64 `json:"Ddls,omitempty"`
    Deletes *int64 `json:"Deletes,omitempty"`
    FullLoadCondtnlChkFailedRows *int64 `json:"FullLoadCondtnlChkFailedRows,omitempty"`
    FullLoadEndTime *time.Time `json:"FullLoadEndTime,omitempty"`
    FullLoadErrorRows *int64 `json:"FullLoadErrorRows,omitempty"`
    FullLoadReloaded *bool `json:"FullLoadReloaded,omitempty"`
    FullLoadRows *int64 `json:"FullLoadRows,omitempty"`
    FullLoadStartTime *time.Time `json:"FullLoadStartTime,omitempty"`
    Inserts *int64 `json:"Inserts,omitempty"`
    LastUpdateTime *time.Time `json:"LastUpdateTime,omitempty"`
    SchemaName *string `json:"SchemaName,omitempty"`
    TableName *string `json:"TableName,omitempty"`
    TableState *string `json:"TableState,omitempty"`
    Updates *int64 `json:"Updates,omitempty"`
    ValidationFailedRecords *int64 `json:"ValidationFailedRecords,omitempty"`
    ValidationPendingRecords *int64 `json:"ValidationPendingRecords,omitempty"`
    ValidationState *string `json:"ValidationState,omitempty"`
    ValidationStateDetails *string `json:"ValidationStateDetails,omitempty"`
    ValidationSuspendedRecords *int64 `json:"ValidationSuspendedRecords,omitempty"`
    
}

