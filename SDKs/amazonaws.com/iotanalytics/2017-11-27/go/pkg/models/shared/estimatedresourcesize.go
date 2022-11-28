package shared

import (
	"time"
)

// EstimatedResourceSize
// The estimated size of the resource.
type EstimatedResourceSize struct {
	EstimatedOn          *time.Time `json:"estimatedOn,omitempty"`
	EstimatedSizeInBytes *float64   `json:"estimatedSizeInBytes,omitempty"`
}
