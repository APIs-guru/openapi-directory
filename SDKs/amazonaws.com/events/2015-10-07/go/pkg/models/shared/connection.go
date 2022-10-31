package shared

import (
"time")

type Connection struct {
    AuthorizationType *ConnectionAuthorizationTypeEnum `json:"AuthorizationType,omitempty"`
    ConnectionArn *string `json:"ConnectionArn,omitempty"`
    ConnectionState *ConnectionStateEnum `json:"ConnectionState,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    LastAuthorizedTime *time.Time `json:"LastAuthorizedTime,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    Name *string `json:"Name,omitempty"`
    StateReason *string `json:"StateReason,omitempty"`
    
}

