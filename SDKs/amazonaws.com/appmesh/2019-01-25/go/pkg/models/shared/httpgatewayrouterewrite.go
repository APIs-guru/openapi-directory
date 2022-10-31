package shared



type HTTPGatewayRouteRewrite struct {
    Hostname *GatewayRouteHostnameRewrite `json:"hostname,omitempty"`
    Path *HTTPGatewayRoutePathRewrite `json:"path,omitempty"`
    Prefix *HTTPGatewayRoutePrefixRewrite `json:"prefix,omitempty"`
    
}

