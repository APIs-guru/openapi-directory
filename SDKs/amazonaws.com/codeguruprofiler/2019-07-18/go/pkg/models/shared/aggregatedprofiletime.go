package shared

import (
	"time"
)

type AggregatedProfileTime struct {
	Period *AggregationPeriodEnum `json:"period"`
	Start  *time.Time             `json:"start"`
}
