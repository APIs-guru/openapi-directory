package shared

type UpdateXMLClassifierRequest struct {
	Classification *string `json:"Classification"`
	Name           string  `json:"Name"`
	RowTag         *string `json:"RowTag"`
}
