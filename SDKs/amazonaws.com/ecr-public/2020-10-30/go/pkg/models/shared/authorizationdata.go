package shared

import (
	"time"
)

// AuthorizationData
// An authorization token data object that corresponds to a public registry.
type AuthorizationData struct {
	AuthorizationToken *string    `json:"authorizationToken,omitempty"`
	ExpiresAt          *time.Time `json:"expiresAt,omitempty"`
}
