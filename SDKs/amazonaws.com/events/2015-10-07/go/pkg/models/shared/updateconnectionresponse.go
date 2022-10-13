package shared

import (
	"time"
)

type UpdateConnectionResponse struct {
	ConnectionArn      *string              `json:"ConnectionArn"`
	ConnectionState    *ConnectionStateEnum `json:"ConnectionState"`
	CreationTime       *time.Time           `json:"CreationTime"`
	LastAuthorizedTime *time.Time           `json:"LastAuthorizedTime"`
	LastModifiedTime   *time.Time           `json:"LastModifiedTime"`
}
