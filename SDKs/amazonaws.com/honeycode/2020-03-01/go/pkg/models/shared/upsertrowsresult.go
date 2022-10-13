package shared

type UpsertRowsResult struct {
	RowIds       []string         `json:"rowIds"`
	UpsertAction UpsertActionEnum `json:"upsertAction"`
}
