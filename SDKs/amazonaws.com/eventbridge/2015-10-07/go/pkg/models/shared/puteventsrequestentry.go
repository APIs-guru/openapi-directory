package shared

import (
"time")

type PutEventsRequestEntry struct {
    Detail *string `json:"Detail,omitempty"`
    DetailType *string `json:"DetailType,omitempty"`
    EventBusName *string `json:"EventBusName,omitempty"`
    Resources []string `json:"Resources,omitempty"`
    Source *string `json:"Source,omitempty"`
    Time *time.Time `json:"Time,omitempty"`
    TraceHeader *string `json:"TraceHeader,omitempty"`
    
}

