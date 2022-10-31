package shared

import (
"time")

type GetProtectionStatusRequest struct {
    EndTime *time.Time `json:"EndTime,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    MemberAccountID *string `json:"MemberAccountId,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    PolicyID string `json:"PolicyId"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    
}

