package shared

import (
	"time"
)

// AggregatedValue
// Contains aggregated asset property values (for example, average, minimum, and maximum).
type AggregatedValue struct {
	Quality   *QualityEnum `json:"quality,omitempty"`
	Timestamp time.Time    `json:"timestamp"`
	Value     Aggregates   `json:"value"`
}
