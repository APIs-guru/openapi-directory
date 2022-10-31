package shared

import (
"time")

type ServiceEvent struct {
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    ID *string `json:"id,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

