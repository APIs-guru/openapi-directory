package shared

type Column struct {
	Comment *string `json:"Comment"`
	Name    string  `json:"Name"`
	Type    *string `json:"Type"`
}
