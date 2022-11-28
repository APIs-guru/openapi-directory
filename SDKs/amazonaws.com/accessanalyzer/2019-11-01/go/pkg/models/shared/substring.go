package shared

// Substring
// A reference to a substring of a literal string in a JSON document.
type Substring struct {
	Length int64 `json:"length"`
	Start  int64 `json:"start"`
}
