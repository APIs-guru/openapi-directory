package shared

// Query
// Defines the query to run against an object.
type Query struct {
	Selectors []Selector `json:"selectors,omitempty"`
}
