package shared

// CreateJSONClassifierRequest
// Specifies a JSON classifier for <code>CreateClassifier</code> to create.
type CreateJSONClassifierRequest struct {
	JSONPath string `json:"JsonPath"`
	Name     string `json:"Name"`
}
