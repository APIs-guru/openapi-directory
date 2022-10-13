package shared

import (
	"time"
)

type CreateConnectionResponse struct {
	ConnectionArn    *string              `json:"ConnectionArn"`
	ConnectionState  *ConnectionStateEnum `json:"ConnectionState"`
	CreationTime     *time.Time           `json:"CreationTime"`
	LastModifiedTime *time.Time           `json:"LastModifiedTime"`
}
