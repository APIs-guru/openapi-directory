package shared

import (
"time")

type DescribeConnectionResponse struct {
    AuthParameters *ConnectionAuthResponseParameters `json:"AuthParameters,omitempty"`
    AuthorizationType *ConnectionAuthorizationTypeEnum `json:"AuthorizationType,omitempty"`
    ConnectionArn *string `json:"ConnectionArn,omitempty"`
    ConnectionState *ConnectionStateEnum `json:"ConnectionState,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    Description *string `json:"Description,omitempty"`
    LastAuthorizedTime *time.Time `json:"LastAuthorizedTime,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    Name *string `json:"Name,omitempty"`
    SecretArn *string `json:"SecretArn,omitempty"`
    StateReason *string `json:"StateReason,omitempty"`
    
}

