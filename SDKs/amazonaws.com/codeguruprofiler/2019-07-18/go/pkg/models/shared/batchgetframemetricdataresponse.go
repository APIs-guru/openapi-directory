package shared

import (
"time")

type BatchGetFrameMetricDataResponse struct {
    EndTime time.Time `json:"endTime"`
    EndTimes []TimestampStructure `json:"endTimes"`
    FrameMetricData []FrameMetricDatum `json:"frameMetricData"`
    Resolution AggregationPeriodEnum `json:"resolution"`
    StartTime time.Time `json:"startTime"`
    UnprocessedEndTimes map[string][]TimestampStructure `json:"unprocessedEndTimes"`
    
}

