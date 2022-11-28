package shared

// UpdateJSONClassifierRequest
// Specifies a JSON classifier to be updated.
type UpdateJSONClassifierRequest struct {
	JSONPath *string `json:"JsonPath,omitempty"`
	Name     string  `json:"Name"`
}
