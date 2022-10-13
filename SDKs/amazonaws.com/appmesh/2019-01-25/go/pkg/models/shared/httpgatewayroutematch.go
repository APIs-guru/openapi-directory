package shared

type HTTPGatewayRouteMatch struct {
	Headers         []HTTPGatewayRouteHeader   `json:"headers"`
	Hostname        *GatewayRouteHostnameMatch `json:"hostname"`
	Method          *HTTPMethodEnum            `json:"method"`
	Path            *HTTPPathMatch             `json:"path"`
	Prefix          *string                    `json:"prefix"`
	QueryParameters []HTTPQueryParameter       `json:"queryParameters"`
}
