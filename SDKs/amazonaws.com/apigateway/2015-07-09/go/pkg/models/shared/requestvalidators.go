package shared

type RequestValidators struct {
	Items    []RequestValidator `json:"items,omitempty"`
	Position *string            `json:"position,omitempty"`
}
