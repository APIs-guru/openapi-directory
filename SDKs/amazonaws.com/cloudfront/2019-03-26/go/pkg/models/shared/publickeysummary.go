package shared

import (
	"time"
)

// PublicKeySummary
// A complex data type for public key information.
type PublicKeySummary struct {
	Comment     *string
	CreatedTime time.Time
	EncodedKey  string
	ID          string
	Name        string
}
