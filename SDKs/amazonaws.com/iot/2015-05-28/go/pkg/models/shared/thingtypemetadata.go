package shared

import (
	"time"
)

type ThingTypeMetadata struct {
	CreationDate    *time.Time `json:"creationDate"`
	Deprecated      *bool      `json:"deprecated"`
	DeprecationDate *time.Time `json:"deprecationDate"`
}
