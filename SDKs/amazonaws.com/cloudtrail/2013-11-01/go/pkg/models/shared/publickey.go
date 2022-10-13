package shared

import (
	"time"
)

type PublicKey struct {
	Fingerprint       *string    `json:"Fingerprint"`
	ValidityEndTime   *time.Time `json:"ValidityEndTime"`
	ValidityStartTime *time.Time `json:"ValidityStartTime"`
	Value             *string    `json:"Value"`
}
