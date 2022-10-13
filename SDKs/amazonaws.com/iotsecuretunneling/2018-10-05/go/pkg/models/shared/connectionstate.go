package shared

import (
	"time"
)

type ConnectionState struct {
	LastUpdatedAt *time.Time            `json:"lastUpdatedAt"`
	Status        *ConnectionStatusEnum `json:"status"`
}
