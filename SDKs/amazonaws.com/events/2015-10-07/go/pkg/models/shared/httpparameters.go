package shared

type HTTPParameters struct {
	HeaderParameters      map[string]string `json:"HeaderParameters"`
	PathParameterValues   []string          `json:"PathParameterValues"`
	QueryStringParameters map[string]string `json:"QueryStringParameters"`
}
