package shared

// SQLQueryDatasetAction
// The SQL query to modify the message.
type SQLQueryDatasetAction struct {
	Filters  []QueryFilter `json:"filters,omitempty"`
	SQLQuery string        `json:"sqlQuery"`
}
