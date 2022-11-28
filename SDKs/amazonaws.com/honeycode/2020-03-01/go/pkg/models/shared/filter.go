package shared

// Filter
//
//	An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate.
type Filter struct {
	ContextRowID *string `json:"contextRowId,omitempty"`
	Formula      string  `json:"formula"`
}
