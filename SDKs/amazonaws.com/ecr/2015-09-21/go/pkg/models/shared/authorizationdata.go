package shared

import (
	"time"
)

type AuthorizationData struct {
	AuthorizationToken *string    `json:"authorizationToken"`
	ExpiresAt          *time.Time `json:"expiresAt"`
	ProxyEndpoint      *string    `json:"proxyEndpoint"`
}
