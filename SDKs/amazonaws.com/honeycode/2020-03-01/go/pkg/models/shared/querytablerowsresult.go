package shared

type QueryTableRowsResult struct {
	ColumnIds      []string   `json:"columnIds"`
	NextToken      *string    `json:"nextToken"`
	Rows           []TableRow `json:"rows"`
	WorkbookCursor int64      `json:"workbookCursor"`
}
