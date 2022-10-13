package shared

import (
	"time"
)

type DescribeEventsRequest struct {
	Duration   *int64          `json:"Duration"`
	EndTime    *time.Time      `json:"EndTime"`
	MaxResults *int64          `json:"MaxResults"`
	NextToken  *string         `json:"NextToken"`
	SourceName *string         `json:"SourceName"`
	SourceType *SourceTypeEnum `json:"SourceType"`
	StartTime  *time.Time      `json:"StartTime"`
}
