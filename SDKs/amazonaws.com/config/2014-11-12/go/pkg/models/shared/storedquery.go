package shared

// StoredQuery
// Provides the details of a stored query.
type StoredQuery struct {
	Description *string `json:"Description,omitempty"`
	Expression  *string `json:"Expression,omitempty"`
	QueryArn    *string `json:"QueryArn,omitempty"`
	QueryID     *string `json:"QueryId,omitempty"`
	QueryName   string  `json:"QueryName"`
}
