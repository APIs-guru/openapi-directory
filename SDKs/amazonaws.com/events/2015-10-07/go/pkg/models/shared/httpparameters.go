package shared

// HTTPParameters
// These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence.
type HTTPParameters struct {
	HeaderParameters      map[string]string `json:"HeaderParameters,omitempty"`
	PathParameterValues   []string          `json:"PathParameterValues,omitempty"`
	QueryStringParameters map[string]string `json:"QueryStringParameters,omitempty"`
}
