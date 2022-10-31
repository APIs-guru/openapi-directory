package shared

import (
"time")

type ServiceSummary struct {
    CreatedAt *time.Time `json:"CreatedAt,omitempty"`
    ServiceArn *string `json:"ServiceArn,omitempty"`
    ServiceID *string `json:"ServiceId,omitempty"`
    ServiceName *string `json:"ServiceName,omitempty"`
    ServiceURL *string `json:"ServiceUrl,omitempty"`
    Status *ServiceStatusEnum `json:"Status,omitempty"`
    UpdatedAt *time.Time `json:"UpdatedAt,omitempty"`
    
}

