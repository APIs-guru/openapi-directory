package shared

import (
	"time"
)

type UpdateConnectionResponse struct {
	ConnectionArn      *string              `json:"ConnectionArn,omitempty"`
	ConnectionState    *ConnectionStateEnum `json:"ConnectionState,omitempty"`
	CreationTime       *time.Time           `json:"CreationTime,omitempty"`
	LastAuthorizedTime *time.Time           `json:"LastAuthorizedTime,omitempty"`
	LastModifiedTime   *time.Time           `json:"LastModifiedTime,omitempty"`
}
