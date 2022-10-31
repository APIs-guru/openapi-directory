package shared

import (
	"time"
)

type Datapoint struct {
	Timestamp *time.Time `json:"Timestamp,omitempty"`
	Value     *float64   `json:"Value,omitempty"`
}
