package shared

import (
	"time"
)

type Introspection struct {
	Features []string   `json:"Features"`
	IssuedAt *time.Time `json:"IssuedAt"`
	UUID     *string    `json:"UUID"`
}
