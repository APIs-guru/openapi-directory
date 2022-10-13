package shared

type CreateXMLClassifierRequest struct {
	Classification string  `json:"Classification"`
	Name           string  `json:"Name"`
	RowTag         *string `json:"RowTag"`
}
