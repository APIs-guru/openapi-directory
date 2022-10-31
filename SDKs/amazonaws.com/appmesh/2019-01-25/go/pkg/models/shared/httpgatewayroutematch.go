package shared

type HTTPGatewayRouteMatch struct {
	Headers         []HTTPGatewayRouteHeader   `json:"headers,omitempty"`
	Hostname        *GatewayRouteHostnameMatch `json:"hostname,omitempty"`
	Method          *HTTPMethodEnum            `json:"method,omitempty"`
	Path            *HTTPPathMatch             `json:"path,omitempty"`
	Prefix          *string                    `json:"prefix,omitempty"`
	QueryParameters []HTTPQueryParameter       `json:"queryParameters,omitempty"`
}
