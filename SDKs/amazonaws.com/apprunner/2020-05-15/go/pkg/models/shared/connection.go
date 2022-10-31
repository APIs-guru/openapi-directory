package shared

import (
"time")

type Connection struct {
    ConnectionArn *string `json:"ConnectionArn,omitempty"`
    ConnectionName *string `json:"ConnectionName,omitempty"`
    CreatedAt *time.Time `json:"CreatedAt,omitempty"`
    ProviderType *ProviderTypeEnum `json:"ProviderType,omitempty"`
    Status *ConnectionStatusEnum `json:"Status,omitempty"`
    
}

