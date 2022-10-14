package shared

type HTTPQueryParameter struct {
	Match *QueryParameterMatch `json:"match,omitempty"`
	Name  string               `json:"name"`
}
