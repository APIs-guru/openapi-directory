package shared

// ParameterConstraints
// Validation constraints imposed on parameters of a request (path, query string, headers).
type ParameterConstraints struct {
	Required *bool `json:"Required,omitempty"`
}
