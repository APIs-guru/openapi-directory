package shared

import (
	"time"
)

type Datapoint struct {
	Timestamp *time.Time `json:"Timestamp"`
	Value     *float64   `json:"Value"`
}
