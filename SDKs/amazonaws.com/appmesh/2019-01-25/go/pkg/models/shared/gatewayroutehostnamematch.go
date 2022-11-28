package shared

// GatewayRouteHostnameMatch
// An object representing the gateway route host name to match.
type GatewayRouteHostnameMatch struct {
	Exact  *string `json:"exact,omitempty"`
	Suffix *string `json:"suffix,omitempty"`
}
