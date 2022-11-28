package shared

import (
	"time"
)

// PublicKey
// A complex data type of public keys you add to CloudFront to use with features like field-level encryption.
type PublicKey struct {
	CreatedTime     time.Time
	ID              string
	PublicKeyConfig PublicKeyConfig
}
