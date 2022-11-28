package shared

// Order
// Specifies the sort order of a sorted column.
type Order struct {
	Column    string `json:"Column"`
	SortOrder int64  `json:"SortOrder"`
}
