package shared

import (
	"time"
)

// Credentials
// Credentials for the provided identity ID.
type Credentials struct {
	AccessKeyID  *string    `json:"AccessKeyId,omitempty"`
	Expiration   *time.Time `json:"Expiration,omitempty"`
	SecretKey    *string    `json:"SecretKey,omitempty"`
	SessionToken *string    `json:"SessionToken,omitempty"`
}
