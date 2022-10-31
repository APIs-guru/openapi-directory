package shared

import (
"time")

type CreateConnectionResponse struct {
    ConnectionArn *string `json:"ConnectionArn,omitempty"`
    ConnectionState *ConnectionStateEnum `json:"ConnectionState,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    
}

