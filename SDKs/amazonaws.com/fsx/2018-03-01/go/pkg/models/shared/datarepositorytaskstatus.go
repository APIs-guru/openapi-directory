package shared

import (
"time")

type DataRepositoryTaskStatus struct {
    FailedCount *int64 `json:"FailedCount,omitempty"`
    LastUpdatedTime *time.Time `json:"LastUpdatedTime,omitempty"`
    SucceededCount *int64 `json:"SucceededCount,omitempty"`
    TotalCount *int64 `json:"TotalCount,omitempty"`
    
}

