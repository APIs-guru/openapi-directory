package shared

type UpdateXMLClassifierRequest struct {
	Classification *string `json:"Classification,omitempty"`
	Name           string  `json:"Name"`
	RowTag         *string `json:"RowTag,omitempty"`
}
