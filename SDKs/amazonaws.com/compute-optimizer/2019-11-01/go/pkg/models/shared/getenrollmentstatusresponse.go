package shared

import (
"time")

type GetEnrollmentStatusResponse struct {
    LastUpdatedTimestamp *time.Time `json:"lastUpdatedTimestamp,omitempty"`
    MemberAccountsEnrolled *bool `json:"memberAccountsEnrolled,omitempty"`
    NumberOfMemberAccountsOptedIn *int64 `json:"numberOfMemberAccountsOptedIn,omitempty"`
    Status *StatusEnum `json:"status,omitempty"`
    StatusReason *string `json:"statusReason,omitempty"`
    
}

