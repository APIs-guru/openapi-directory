package shared

type RequestValidators struct {
	Items    []RequestValidator `json:"items"`
	Position *string            `json:"position"`
}
