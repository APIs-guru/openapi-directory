package shared

import (
"time")

type DescribeEventsMessage struct {
    Duration *int64 `json:"Duration,omitempty"`
    EndTime *time.Time `json:"EndTime,omitempty"`
    EventCategories []string `json:"EventCategories,omitempty"`
    Filters []Filter `json:"Filters,omitempty"`
    Marker *string `json:"Marker,omitempty"`
    MaxRecords *int64 `json:"MaxRecords,omitempty"`
    SourceIdentifier *string `json:"SourceIdentifier,omitempty"`
    SourceType *SourceTypeEnum `json:"SourceType,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    
}

