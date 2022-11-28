package shared

import (
	"time"
)

type DescribeFleetHistoryResult struct {
	FleetID           *string
	HistoryRecords    []HistoryRecordEntry
	LastEvaluatedTime *time.Time
	NextToken         *string
	StartTime         *time.Time
}
