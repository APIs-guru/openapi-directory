package shared

import (
"time")

type ListPublicKeysRequest struct {
    EndTime *time.Time `json:"EndTime,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    
}

