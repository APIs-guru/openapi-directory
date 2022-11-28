package shared

import (
	"time"
)

// DescribeSpotFleetRequestHistoryResponse
// Contains the output of DescribeSpotFleetRequestHistory.
type DescribeSpotFleetRequestHistoryResponse struct {
	HistoryRecords     []HistoryRecord
	LastEvaluatedTime  *time.Time
	NextToken          *string
	SpotFleetRequestID *string
	StartTime          *time.Time
}
