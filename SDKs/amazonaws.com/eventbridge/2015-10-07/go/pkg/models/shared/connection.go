package shared

import (
	"time"
)

type Connection struct {
	AuthorizationType  *ConnectionAuthorizationTypeEnum `json:"AuthorizationType"`
	ConnectionArn      *string                          `json:"ConnectionArn"`
	ConnectionState    *ConnectionStateEnum             `json:"ConnectionState"`
	CreationTime       *time.Time                       `json:"CreationTime"`
	LastAuthorizedTime *time.Time                       `json:"LastAuthorizedTime"`
	LastModifiedTime   *time.Time                       `json:"LastModifiedTime"`
	Name               *string                          `json:"Name"`
	StateReason        *string                          `json:"StateReason"`
}
