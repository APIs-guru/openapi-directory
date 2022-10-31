package shared

import (
"time")

type LookupEventsRequest struct {
    EndTime *time.Time `json:"EndTime,omitempty"`
    EventCategory *EventCategoryEnum `json:"EventCategory,omitempty"`
    LookupAttributes []LookupAttribute `json:"LookupAttributes,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    
}

