package shared

import (
	"time"
)

// EventFeedbackType
// Specifies the event feedback type.
type EventFeedbackType struct {
	FeedbackDate  *time.Time            `json:"FeedbackDate,omitempty"`
	FeedbackValue FeedbackValueTypeEnum `json:"FeedbackValue"`
	Provider      string                `json:"Provider"`
}
