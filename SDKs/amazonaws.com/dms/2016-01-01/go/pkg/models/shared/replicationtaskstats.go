package shared

import (
	"time"
)

// ReplicationTaskStats
// In response to a request by the <code>DescribeReplicationTasks</code> operation, this object provides a collection of statistics about a replication task.
type ReplicationTaskStats struct {
	ElapsedTimeMillis       *int64     `json:"ElapsedTimeMillis,omitempty"`
	FreshStartDate          *time.Time `json:"FreshStartDate,omitempty"`
	FullLoadFinishDate      *time.Time `json:"FullLoadFinishDate,omitempty"`
	FullLoadProgressPercent *int64     `json:"FullLoadProgressPercent,omitempty"`
	FullLoadStartDate       *time.Time `json:"FullLoadStartDate,omitempty"`
	StartDate               *time.Time `json:"StartDate,omitempty"`
	StopDate                *time.Time `json:"StopDate,omitempty"`
	TablesErrored           *int64     `json:"TablesErrored,omitempty"`
	TablesLoaded            *int64     `json:"TablesLoaded,omitempty"`
	TablesLoading           *int64     `json:"TablesLoading,omitempty"`
	TablesQueued            *int64     `json:"TablesQueued,omitempty"`
}
