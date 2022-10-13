package shared

type SQLQueryDatasetAction struct {
	Filters  []QueryFilter `json:"filters"`
	SQLQuery string        `json:"sqlQuery"`
}
