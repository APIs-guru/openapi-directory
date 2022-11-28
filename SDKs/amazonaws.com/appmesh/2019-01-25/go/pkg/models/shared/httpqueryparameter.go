package shared

// HTTPQueryParameter
// An object that represents the query parameter in the request.
type HTTPQueryParameter struct {
	Match *QueryParameterMatch `json:"match,omitempty"`
	Name  string               `json:"name"`
}
