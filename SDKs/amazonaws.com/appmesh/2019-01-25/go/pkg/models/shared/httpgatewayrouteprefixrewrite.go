package shared

type HTTPGatewayRoutePrefixRewrite struct {
	DefaultPrefix *DefaultGatewayRouteRewriteEnum `json:"defaultPrefix"`
	Value         *string                         `json:"value"`
}
