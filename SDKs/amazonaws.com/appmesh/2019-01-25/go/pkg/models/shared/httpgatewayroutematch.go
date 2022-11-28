package shared

// HTTPGatewayRouteMatch
// An object that represents the criteria for determining a request match.
type HTTPGatewayRouteMatch struct {
	Headers         []HTTPGatewayRouteHeader   `json:"headers,omitempty"`
	Hostname        *GatewayRouteHostnameMatch `json:"hostname,omitempty"`
	Method          *HTTPMethodEnum            `json:"method,omitempty"`
	Path            *HTTPPathMatch             `json:"path,omitempty"`
	Prefix          *string                    `json:"prefix,omitempty"`
	QueryParameters []HTTPQueryParameter       `json:"queryParameters,omitempty"`
}
