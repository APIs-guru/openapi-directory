package shared

import (
	"time"
)

type Introspection struct {
	Features []string   `json:"Features,omitempty"`
	IssuedAt *time.Time `json:"IssuedAt,omitempty"`
	UUID     *string    `json:"UUID,omitempty"`
}
