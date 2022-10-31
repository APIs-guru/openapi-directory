package shared

import (
"time")

type OrganizationConformancePackStatus struct {
    ErrorCode *string `json:"ErrorCode,omitempty"`
    ErrorMessage *string `json:"ErrorMessage,omitempty"`
    LastUpdateTime *time.Time `json:"LastUpdateTime,omitempty"`
    OrganizationConformancePackName string `json:"OrganizationConformancePackName"`
    Status OrganizationResourceStatusEnum `json:"Status"`
    
}

