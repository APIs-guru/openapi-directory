package shared

import (
"time")

type Event struct {
    DataSource *EventDataSourceEnum `json:"DataSource,omitempty"`
    EventClass *EventClassEnum `json:"EventClass,omitempty"`
    EventSource *string `json:"EventSource,omitempty"`
    ID *string `json:"Id,omitempty"`
    Name *string `json:"Name,omitempty"`
    ResourceCollection *ResourceCollection `json:"ResourceCollection,omitempty"`
    Resources []EventResource `json:"Resources,omitempty"`
    Time *time.Time `json:"Time,omitempty"`
    
}

