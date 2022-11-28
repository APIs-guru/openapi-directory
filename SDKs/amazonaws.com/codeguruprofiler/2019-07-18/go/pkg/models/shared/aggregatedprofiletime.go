package shared

import (
	"time"
)

// AggregatedProfileTime
//
//	Specifies the aggregation period and aggregation start time for an aggregated profile. An aggregated profile is used to collect posted agent profiles during an aggregation period. There are three possible aggregation periods (1 day, 1 hour, or 5 minutes).
type AggregatedProfileTime struct {
	Period *AggregationPeriodEnum `json:"period,omitempty"`
	Start  *time.Time             `json:"start,omitempty"`
}
