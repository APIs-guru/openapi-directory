package shared

import (
	"time"
)

// ConnectionState
// The state of a connection.
type ConnectionState struct {
	LastUpdatedAt *time.Time            `json:"lastUpdatedAt,omitempty"`
	Status        *ConnectionStatusEnum `json:"status,omitempty"`
}
