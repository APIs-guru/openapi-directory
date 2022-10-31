package shared

import (
"time")

type EndpointFilter struct {
    CreationTimeAfter *time.Time `json:"CreationTimeAfter,omitempty"`
    CreationTimeBefore *time.Time `json:"CreationTimeBefore,omitempty"`
    ModelArn *string `json:"ModelArn,omitempty"`
    Status *EndpointStatusEnum `json:"Status,omitempty"`
    
}

