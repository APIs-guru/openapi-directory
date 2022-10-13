package shared

import (
	"time"
)

type ServiceEvent struct {
	CreatedAt *time.Time `json:"createdAt"`
	ID        *string    `json:"id"`
	Message   *string    `json:"message"`
}
