package shared

import (
	"time"
)

// IDFormat
// Describes the ID format for a resource.
type IDFormat struct {
	Deadline   *time.Time
	Resource   *string
	UseLongIds *bool
}
