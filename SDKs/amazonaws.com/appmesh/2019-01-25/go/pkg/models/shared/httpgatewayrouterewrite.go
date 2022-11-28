package shared

// HTTPGatewayRouteRewrite
// An object representing the gateway route to rewrite.
type HTTPGatewayRouteRewrite struct {
	Hostname *GatewayRouteHostnameRewrite   `json:"hostname,omitempty"`
	Path     *HTTPGatewayRoutePathRewrite   `json:"path,omitempty"`
	Prefix   *HTTPGatewayRoutePrefixRewrite `json:"prefix,omitempty"`
}
