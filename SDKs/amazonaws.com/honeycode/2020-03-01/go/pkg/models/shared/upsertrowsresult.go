package shared

// UpsertRowsResult
//
//	An object that represents the result of a single upsert row request.
type UpsertRowsResult struct {
	RowIds       []string         `json:"rowIds"`
	UpsertAction UpsertActionEnum `json:"upsertAction"`
}
