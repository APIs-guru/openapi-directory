package shared

import (
"time")

type ListTestGridSessionsRequest struct {
    CreationTimeAfter *time.Time `json:"creationTimeAfter,omitempty"`
    CreationTimeBefore *time.Time `json:"creationTimeBefore,omitempty"`
    EndTimeAfter *time.Time `json:"endTimeAfter,omitempty"`
    EndTimeBefore *time.Time `json:"endTimeBefore,omitempty"`
    MaxResult *int64 `json:"maxResult,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    ProjectArn string `json:"projectArn"`
    Status *TestGridSessionStatusEnum `json:"status,omitempty"`
    
}

