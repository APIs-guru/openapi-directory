package shared



type SQLQueryDatasetAction struct {
    Filters []QueryFilter `json:"filters,omitempty"`
    SQLQuery string `json:"sqlQuery"`
    
}

