package shared

import (
"time")

type AssociatedClientDevice struct {
    AssociationTimestamp *time.Time `json:"associationTimestamp,omitempty"`
    ThingName *string `json:"thingName,omitempty"`
    
}

