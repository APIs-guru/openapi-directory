package shared

// NamedQuery
// A query, where <code>QueryString</code> is the list of SQL query statements that comprise the query.
type NamedQuery struct {
	Database     string  `json:"Database"`
	Description  *string `json:"Description,omitempty"`
	Name         string  `json:"Name"`
	NamedQueryID *string `json:"NamedQueryId,omitempty"`
	QueryString  string  `json:"QueryString"`
	WorkGroup    *string `json:"WorkGroup,omitempty"`
}
