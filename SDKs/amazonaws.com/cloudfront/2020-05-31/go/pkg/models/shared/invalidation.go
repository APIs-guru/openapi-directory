package shared

import (
	"time"
)

// Invalidation
// An invalidation.
type Invalidation struct {
	CreateTime        time.Time
	ID                string
	InvalidationBatch InvalidationBatch
	Status            string
}
