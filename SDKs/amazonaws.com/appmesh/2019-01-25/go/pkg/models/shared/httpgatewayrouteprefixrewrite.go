package shared

// HTTPGatewayRoutePrefixRewrite
// An object representing the beginning characters of the route to rewrite.
type HTTPGatewayRoutePrefixRewrite struct {
	DefaultPrefix *DefaultGatewayRouteRewriteEnum `json:"defaultPrefix,omitempty"`
	Value         *string                         `json:"value,omitempty"`
}
