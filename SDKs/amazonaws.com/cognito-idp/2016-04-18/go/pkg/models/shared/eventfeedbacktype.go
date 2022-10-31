package shared

import (
"time")

type EventFeedbackType struct {
    FeedbackDate *time.Time `json:"FeedbackDate,omitempty"`
    FeedbackValue FeedbackValueTypeEnum `json:"FeedbackValue"`
    Provider string `json:"Provider"`
    
}

