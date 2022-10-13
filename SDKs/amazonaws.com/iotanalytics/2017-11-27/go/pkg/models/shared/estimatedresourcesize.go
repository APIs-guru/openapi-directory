package shared

import (
	"time"
)

type EstimatedResourceSize struct {
	EstimatedOn          *time.Time `json:"estimatedOn"`
	EstimatedSizeInBytes *float64   `json:"estimatedSizeInBytes"`
}
