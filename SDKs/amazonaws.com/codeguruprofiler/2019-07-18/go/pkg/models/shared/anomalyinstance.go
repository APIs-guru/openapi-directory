package shared

import (
	"time"
)

type AnomalyInstance struct {
	EndTime      *time.Time    `json:"endTime,omitempty"`
	ID           string        `json:"id"`
	StartTime    time.Time     `json:"startTime"`
	UserFeedback *UserFeedback `json:"userFeedback,omitempty"`
}
