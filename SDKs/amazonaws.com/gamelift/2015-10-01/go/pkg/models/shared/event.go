package shared

import (
"time")

type Event struct {
    EventCode *EventCodeEnum `json:"EventCode,omitempty"`
    EventID *string `json:"EventId,omitempty"`
    EventTime *time.Time `json:"EventTime,omitempty"`
    Message *string `json:"Message,omitempty"`
    PreSignedLogURL *string `json:"PreSignedLogUrl,omitempty"`
    ResourceID *string `json:"ResourceId,omitempty"`
    
}

