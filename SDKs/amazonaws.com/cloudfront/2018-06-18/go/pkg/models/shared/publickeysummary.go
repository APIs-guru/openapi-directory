package shared

import (
	"time"
)

// PublicKeySummary
//
//	Public key information summary.
type PublicKeySummary struct {
	Comment     *string
	CreatedTime time.Time
	EncodedKey  string
	ID          string
	Name        string
}
