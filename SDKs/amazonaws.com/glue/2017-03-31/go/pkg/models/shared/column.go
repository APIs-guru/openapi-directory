package shared

type Column struct {
	Comment    *string           `json:"Comment,omitempty"`
	Name       string            `json:"Name"`
	Parameters map[string]string `json:"Parameters,omitempty"`
	Type       *string           `json:"Type,omitempty"`
}
