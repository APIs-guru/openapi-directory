package shared

import (
	"time"
)

type ThingTypeMetadata struct {
	CreationDate    *time.Time `json:"creationDate,omitempty"`
	Deprecated      *bool      `json:"deprecated,omitempty"`
	DeprecationDate *time.Time `json:"deprecationDate,omitempty"`
}
