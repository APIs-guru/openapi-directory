package shared

// CreateXMLClassifierRequest
// Specifies an XML classifier for <code>CreateClassifier</code> to create.
type CreateXMLClassifierRequest struct {
	Classification string  `json:"Classification"`
	Name           string  `json:"Name"`
	RowTag         *string `json:"RowTag,omitempty"`
}
