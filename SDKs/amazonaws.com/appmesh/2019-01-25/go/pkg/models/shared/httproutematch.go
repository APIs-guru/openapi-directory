package shared

// HTTPRouteMatch
// An object that represents the requirements for a route to match HTTP requests for a virtual router.
type HTTPRouteMatch struct {
	Headers         []HTTPRouteHeader    `json:"headers,omitempty"`
	Method          *HTTPMethodEnum      `json:"method,omitempty"`
	Path            *HTTPPathMatch       `json:"path,omitempty"`
	Prefix          *string              `json:"prefix,omitempty"`
	QueryParameters []HTTPQueryParameter `json:"queryParameters,omitempty"`
	Scheme          *HTTPSchemeEnum      `json:"scheme,omitempty"`
}
