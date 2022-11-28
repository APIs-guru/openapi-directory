package shared

import (
	"time"
)

// ThingTypeMetadata
// The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated.
type ThingTypeMetadata struct {
	CreationDate    *time.Time `json:"creationDate,omitempty"`
	Deprecated      *bool      `json:"deprecated,omitempty"`
	DeprecationDate *time.Time `json:"deprecationDate,omitempty"`
}
