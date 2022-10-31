package shared

import (
"time")

type Event struct {
    AccessKeyID *string `json:"AccessKeyId,omitempty"`
    CloudTrailEvent *string `json:"CloudTrailEvent,omitempty"`
    EventID *string `json:"EventId,omitempty"`
    EventName *string `json:"EventName,omitempty"`
    EventSource *string `json:"EventSource,omitempty"`
    EventTime *time.Time `json:"EventTime,omitempty"`
    ReadOnly *string `json:"ReadOnly,omitempty"`
    Resources []Resource `json:"Resources,omitempty"`
    Username *string `json:"Username,omitempty"`
    
}

