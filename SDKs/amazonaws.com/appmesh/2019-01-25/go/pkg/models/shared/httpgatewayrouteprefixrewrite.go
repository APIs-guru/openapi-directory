package shared

type HTTPGatewayRoutePrefixRewrite struct {
	DefaultPrefix *DefaultGatewayRouteRewriteEnum `json:"defaultPrefix,omitempty"`
	Value         *string                         `json:"value,omitempty"`
}
