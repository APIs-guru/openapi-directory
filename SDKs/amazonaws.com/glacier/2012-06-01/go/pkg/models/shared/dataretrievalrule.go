package shared

// DataRetrievalRule
// Data retrieval policy rule.
type DataRetrievalRule struct {
	BytesPerHour *int64  `json:"BytesPerHour,omitempty"`
	Strategy     *string `json:"Strategy,omitempty"`
}
