package shared

type HTTPRouteMatch struct {
	Headers         []HTTPRouteHeader    `json:"headers"`
	Method          *HTTPMethodEnum      `json:"method"`
	Path            *HTTPPathMatch       `json:"path"`
	Prefix          *string              `json:"prefix"`
	QueryParameters []HTTPQueryParameter `json:"queryParameters"`
	Scheme          *HTTPSchemeEnum      `json:"scheme"`
}
