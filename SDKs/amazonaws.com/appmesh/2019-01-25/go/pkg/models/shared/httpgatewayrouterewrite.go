package shared

type HTTPGatewayRouteRewrite struct {
	Hostname *GatewayRouteHostnameRewrite   `json:"hostname"`
	Path     *HTTPGatewayRoutePathRewrite   `json:"path"`
	Prefix   *HTTPGatewayRoutePrefixRewrite `json:"prefix"`
}
