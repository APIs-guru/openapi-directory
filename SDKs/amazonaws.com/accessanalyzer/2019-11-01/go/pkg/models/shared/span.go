package shared

// Span
// A span in a policy. The span consists of a start position (inclusive) and end position (exclusive).
type Span struct {
	End   Position `json:"end"`
	Start Position `json:"start"`
}
