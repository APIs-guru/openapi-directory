package shared

import (
"time")

type ListProblemsRequest struct {
    EndTime *time.Time `json:"EndTime,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ResourceGroupName *string `json:"ResourceGroupName,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    
}

