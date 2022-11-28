package shared

// Column
// Contains metadata for a column in a table.
type Column struct {
	Comment *string `json:"Comment,omitempty"`
	Name    string  `json:"Name"`
	Type    *string `json:"Type,omitempty"`
}
