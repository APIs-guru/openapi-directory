package shared

import (
	"time"
)

type DeauthorizeConnectionResponse struct {
	ConnectionArn      *string              `json:"ConnectionArn"`
	ConnectionState    *ConnectionStateEnum `json:"ConnectionState"`
	CreationTime       *time.Time           `json:"CreationTime"`
	LastAuthorizedTime *time.Time           `json:"LastAuthorizedTime"`
	LastModifiedTime   *time.Time           `json:"LastModifiedTime"`
}
