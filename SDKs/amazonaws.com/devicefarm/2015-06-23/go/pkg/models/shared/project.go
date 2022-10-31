package shared

import (
"time")

type Project struct {
    Arn *string `json:"arn,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    DefaultJobTimeoutMinutes *int64 `json:"defaultJobTimeoutMinutes,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

