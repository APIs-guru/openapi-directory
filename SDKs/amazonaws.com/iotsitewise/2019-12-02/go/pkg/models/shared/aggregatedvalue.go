package shared

import (
	"time"
)

type AggregatedValue struct {
	Quality   *QualityEnum `json:"quality,omitempty"`
	Timestamp time.Time    `json:"timestamp"`
	Value     Aggregates   `json:"value"`
}
