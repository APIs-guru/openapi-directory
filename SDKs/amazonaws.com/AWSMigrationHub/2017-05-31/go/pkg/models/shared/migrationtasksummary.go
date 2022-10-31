package shared

import (
"time")

type MigrationTaskSummary struct {
    MigrationTaskName *string `json:"MigrationTaskName,omitempty"`
    ProgressPercent *int64 `json:"ProgressPercent,omitempty"`
    ProgressUpdateStream *string `json:"ProgressUpdateStream,omitempty"`
    Status *StatusEnum `json:"Status,omitempty"`
    StatusDetail *string `json:"StatusDetail,omitempty"`
    UpdateDateTime *time.Time `json:"UpdateDateTime,omitempty"`
    
}

