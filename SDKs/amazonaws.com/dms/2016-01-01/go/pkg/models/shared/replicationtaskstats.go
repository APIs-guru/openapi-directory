package shared

import (
	"time"
)

type ReplicationTaskStats struct {
	ElapsedTimeMillis       *int64     `json:"ElapsedTimeMillis"`
	FreshStartDate          *time.Time `json:"FreshStartDate"`
	FullLoadFinishDate      *time.Time `json:"FullLoadFinishDate"`
	FullLoadProgressPercent *int64     `json:"FullLoadProgressPercent"`
	FullLoadStartDate       *time.Time `json:"FullLoadStartDate"`
	StartDate               *time.Time `json:"StartDate"`
	StopDate                *time.Time `json:"StopDate"`
	TablesErrored           *int64     `json:"TablesErrored"`
	TablesLoaded            *int64     `json:"TablesLoaded"`
	TablesLoading           *int64     `json:"TablesLoading"`
	TablesQueued            *int64     `json:"TablesQueued"`
}
