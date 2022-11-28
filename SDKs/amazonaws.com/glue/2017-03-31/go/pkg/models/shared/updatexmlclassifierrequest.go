package shared

// UpdateXMLClassifierRequest
// Specifies an XML classifier to be updated.
type UpdateXMLClassifierRequest struct {
	Classification *string `json:"Classification,omitempty"`
	Name           string  `json:"Name"`
	RowTag         *string `json:"RowTag,omitempty"`
}
