package shared

import (
	"time"
)

type EventFeedbackType struct {
	FeedbackDate  *time.Time            `json:"FeedbackDate"`
	FeedbackValue FeedbackValueTypeEnum `json:"FeedbackValue"`
	Provider      string                `json:"Provider"`
}
