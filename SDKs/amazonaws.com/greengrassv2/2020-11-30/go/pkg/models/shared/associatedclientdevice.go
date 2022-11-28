package shared

import (
	"time"
)

// AssociatedClientDevice
// Contains information about a client device that is associated to a core device for cloud discovery.
type AssociatedClientDevice struct {
	AssociationTimestamp *time.Time `json:"associationTimestamp,omitempty"`
	ThingName            *string    `json:"thingName,omitempty"`
}
