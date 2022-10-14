package shared

type Column struct {
	Comment *string `json:"Comment,omitempty"`
	Name    string  `json:"Name"`
	Type    *string `json:"Type,omitempty"`
}
