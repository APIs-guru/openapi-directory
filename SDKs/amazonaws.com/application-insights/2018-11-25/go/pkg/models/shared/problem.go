package shared

import (
	"time"
)

type Problem struct {
	AffectedResource  *string                      `json:"AffectedResource,omitempty"`
	EndTime           *time.Time                   `json:"EndTime,omitempty"`
	Feedback          map[string]FeedbackValueEnum `json:"Feedback,omitempty"`
	ID                *string                      `json:"Id,omitempty"`
	Insights          *string                      `json:"Insights,omitempty"`
	ResourceGroupName *string                      `json:"ResourceGroupName,omitempty"`
	SeverityLevel     *SeverityLevelEnum           `json:"SeverityLevel,omitempty"`
	StartTime         *time.Time                   `json:"StartTime,omitempty"`
	Status            *StatusEnum                  `json:"Status,omitempty"`
	Title             *string                      `json:"Title,omitempty"`
}
