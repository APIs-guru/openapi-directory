package shared

import (
"time")

type OrganizationConformancePackDetailedStatus struct {
    AccountID string `json:"AccountId"`
    ConformancePackName string `json:"ConformancePackName"`
    ErrorCode *string `json:"ErrorCode,omitempty"`
    ErrorMessage *string `json:"ErrorMessage,omitempty"`
    LastUpdateTime *time.Time `json:"LastUpdateTime,omitempty"`
    Status OrganizationResourceDetailedStatusEnum `json:"Status"`
    
}

