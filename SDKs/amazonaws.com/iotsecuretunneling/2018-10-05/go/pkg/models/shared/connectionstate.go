package shared

import (
	"time"
)

type ConnectionState struct {
	LastUpdatedAt *time.Time            `json:"lastUpdatedAt,omitempty"`
	Status        *ConnectionStatusEnum `json:"status,omitempty"`
}
