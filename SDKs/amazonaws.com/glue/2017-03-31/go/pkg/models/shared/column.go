package shared

type Column struct {
	Comment    *string           `json:"Comment"`
	Name       string            `json:"Name"`
	Parameters map[string]string `json:"Parameters"`
	Type       *string           `json:"Type"`
}
