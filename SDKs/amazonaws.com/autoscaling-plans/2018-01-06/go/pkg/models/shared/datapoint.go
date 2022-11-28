package shared

import (
	"time"
)

// Datapoint
// Represents a single value in the forecast data used for predictive scaling.
type Datapoint struct {
	Timestamp *time.Time `json:"Timestamp,omitempty"`
	Value     *float64   `json:"Value,omitempty"`
}
