package shared

import (
	"time"
)

// InvalidationSummary
// A summary of an invalidation request.
type InvalidationSummary struct {
	CreateTime time.Time
	ID         string
	Status     string
}
