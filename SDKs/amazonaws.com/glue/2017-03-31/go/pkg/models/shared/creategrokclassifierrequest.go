package shared

// CreateGrokClassifierRequest
// Specifies a <code>grok</code> classifier for <code>CreateClassifier</code> to create.
type CreateGrokClassifierRequest struct {
	Classification string  `json:"Classification"`
	CustomPatterns *string `json:"CustomPatterns,omitempty"`
	GrokPattern    string  `json:"GrokPattern"`
	Name           string  `json:"Name"`
}
