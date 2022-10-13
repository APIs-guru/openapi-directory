package shared

import (
	"time"
)

type Problem struct {
	AffectedResource  *string                      `json:"AffectedResource"`
	EndTime           *time.Time                   `json:"EndTime"`
	Feedback          map[string]FeedbackValueEnum `json:"Feedback"`
	ID                *string                      `json:"Id"`
	Insights          *string                      `json:"Insights"`
	ResourceGroupName *string                      `json:"ResourceGroupName"`
	SeverityLevel     *SeverityLevelEnum           `json:"SeverityLevel"`
	StartTime         *time.Time                   `json:"StartTime"`
	Status            *StatusEnum                  `json:"Status"`
	Title             *string                      `json:"Title"`
}
