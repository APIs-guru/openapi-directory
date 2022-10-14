package shared

type HTTPParameters struct {
	HeaderParameters      map[string]string `json:"HeaderParameters,omitempty"`
	PathParameterValues   []string          `json:"PathParameterValues,omitempty"`
	QueryStringParameters map[string]string `json:"QueryStringParameters,omitempty"`
}
