package shared

import (
	"time"
)

type AggregatedValue struct {
	Quality   *QualityEnum `json:"quality"`
	Timestamp time.Time    `json:"timestamp"`
	Value     Aggregates   `json:"value"`
}
