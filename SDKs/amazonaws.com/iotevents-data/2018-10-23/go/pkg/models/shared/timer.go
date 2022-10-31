package shared

import (
	"time"
)

type Timer struct {
	Name      string    `json:"name"`
	Timestamp time.Time `json:"timestamp"`
}
