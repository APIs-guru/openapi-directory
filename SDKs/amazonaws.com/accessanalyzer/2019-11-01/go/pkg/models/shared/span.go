package shared

type Span struct {
	End   Position `json:"end"`
	Start Position `json:"start"`
}
