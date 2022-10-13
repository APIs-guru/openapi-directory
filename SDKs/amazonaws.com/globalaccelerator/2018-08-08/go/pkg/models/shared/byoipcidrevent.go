package shared

import (
	"time"
)

type ByoipCidrEvent struct {
	Message   *string    `json:"Message"`
	Timestamp *time.Time `json:"Timestamp"`
}
