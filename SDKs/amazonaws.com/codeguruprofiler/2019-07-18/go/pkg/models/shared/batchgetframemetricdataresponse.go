package shared

import (
	"time"
)

// BatchGetFrameMetricDataResponse
// The structure representing the BatchGetFrameMetricDataResponse.
type BatchGetFrameMetricDataResponse struct {
	EndTime             time.Time                       `json:"endTime"`
	EndTimes            []TimestampStructure            `json:"endTimes"`
	FrameMetricData     []FrameMetricDatum              `json:"frameMetricData"`
	Resolution          AggregationPeriodEnum           `json:"resolution"`
	StartTime           time.Time                       `json:"startTime"`
	UnprocessedEndTimes map[string][]TimestampStructure `json:"unprocessedEndTimes"`
}
