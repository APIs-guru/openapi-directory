package shared

import (
	"time"
)

// PublicKey
// Contains information about a returned public key.
type PublicKey struct {
	Fingerprint       *string    `json:"Fingerprint,omitempty"`
	ValidityEndTime   *time.Time `json:"ValidityEndTime,omitempty"`
	ValidityStartTime *time.Time `json:"ValidityStartTime,omitempty"`
	Value             *string    `json:"Value,omitempty"`
}
