package shared

import (
	"time"
)

// AuthorizationData
// An object representing authorization data for an Amazon ECR registry.
type AuthorizationData struct {
	AuthorizationToken *string    `json:"authorizationToken,omitempty"`
	ExpiresAt          *time.Time `json:"expiresAt,omitempty"`
	ProxyEndpoint      *string    `json:"proxyEndpoint,omitempty"`
}
