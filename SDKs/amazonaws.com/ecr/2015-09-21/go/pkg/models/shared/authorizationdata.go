package shared

import (
"time")

type AuthorizationData struct {
    AuthorizationToken *string `json:"authorizationToken,omitempty"`
    ExpiresAt *time.Time `json:"expiresAt,omitempty"`
    ProxyEndpoint *string `json:"proxyEndpoint,omitempty"`
    
}

