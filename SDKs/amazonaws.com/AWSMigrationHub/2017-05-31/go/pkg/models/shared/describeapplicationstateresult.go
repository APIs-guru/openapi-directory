package shared

import (
"time")

type DescribeApplicationStateResult struct {
    ApplicationStatus *ApplicationStatusEnum `json:"ApplicationStatus,omitempty"`
    LastUpdatedTime *time.Time `json:"LastUpdatedTime,omitempty"`
    
}

