package shared

import (
	"time"
)

// PublicKeySummary
// Contains information about a public key.
type PublicKeySummary struct {
	Comment     *string
	CreatedTime time.Time
	EncodedKey  string
	ID          string
	Name        string
}
