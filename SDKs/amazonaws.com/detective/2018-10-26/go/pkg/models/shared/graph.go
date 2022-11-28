package shared

import (
	"time"
)

// Graph
// A behavior graph in Detective.
type Graph struct {
	Arn         *string    `json:"Arn,omitempty"`
	CreatedTime *time.Time `json:"CreatedTime,omitempty"`
}
