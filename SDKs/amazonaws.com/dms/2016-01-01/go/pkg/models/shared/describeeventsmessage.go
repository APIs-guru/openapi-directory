package shared

import (
	"time"
)

type DescribeEventsMessage struct {
	Duration         *int64          `json:"Duration"`
	EndTime          *time.Time      `json:"EndTime"`
	EventCategories  []string        `json:"EventCategories"`
	Filters          []Filter        `json:"Filters"`
	Marker           *string         `json:"Marker"`
	MaxRecords       *int64          `json:"MaxRecords"`
	SourceIdentifier *string         `json:"SourceIdentifier"`
	SourceType       *SourceTypeEnum `json:"SourceType"`
	StartTime        *time.Time      `json:"StartTime"`
}
