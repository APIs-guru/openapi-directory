package shared

import (
	"time"
)

type AuthorizationData struct {
	AuthorizationToken *string    `json:"authorizationToken,omitempty"`
	ExpiresAt          *time.Time `json:"expiresAt,omitempty"`
}
