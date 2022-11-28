package shared

import (
	"time"
)

// AnomalyInstance
// The specific duration in which the metric is flagged as anomalous.
type AnomalyInstance struct {
	EndTime      *time.Time    `json:"endTime,omitempty"`
	ID           string        `json:"id"`
	StartTime    time.Time     `json:"startTime"`
	UserFeedback *UserFeedback `json:"userFeedback,omitempty"`
}
