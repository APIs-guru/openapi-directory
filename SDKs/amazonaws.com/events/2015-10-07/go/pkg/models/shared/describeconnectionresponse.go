package shared

import (
	"time"
)

type DescribeConnectionResponse struct {
	AuthParameters     *ConnectionAuthResponseParameters `json:"AuthParameters"`
	AuthorizationType  *ConnectionAuthorizationTypeEnum  `json:"AuthorizationType"`
	ConnectionArn      *string                           `json:"ConnectionArn"`
	ConnectionState    *ConnectionStateEnum              `json:"ConnectionState"`
	CreationTime       *time.Time                        `json:"CreationTime"`
	Description        *string                           `json:"Description"`
	LastAuthorizedTime *time.Time                        `json:"LastAuthorizedTime"`
	LastModifiedTime   *time.Time                        `json:"LastModifiedTime"`
	Name               *string                           `json:"Name"`
	SecretArn          *string                           `json:"SecretArn"`
	StateReason        *string                           `json:"StateReason"`
}
