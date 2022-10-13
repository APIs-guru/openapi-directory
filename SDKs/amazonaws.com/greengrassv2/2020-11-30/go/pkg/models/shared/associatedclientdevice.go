package shared

import (
	"time"
)

type AssociatedClientDevice struct {
	AssociationTimestamp *time.Time `json:"associationTimestamp"`
	ThingName            *string    `json:"thingName"`
}
