package shared

import (
	"time"
)

type DataRepositoryTaskStatus struct {
	FailedCount     *int64     `json:"FailedCount"`
	LastUpdatedTime *time.Time `json:"LastUpdatedTime"`
	SucceededCount  *int64     `json:"SucceededCount"`
	TotalCount      *int64     `json:"TotalCount"`
}
