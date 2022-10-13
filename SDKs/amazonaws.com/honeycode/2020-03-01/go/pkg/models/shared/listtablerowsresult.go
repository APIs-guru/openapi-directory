package shared

type ListTableRowsResult struct {
	ColumnIds      []string   `json:"columnIds"`
	NextToken      *string    `json:"nextToken"`
	RowIdsNotFound []string   `json:"rowIdsNotFound"`
	Rows           []TableRow `json:"rows"`
	WorkbookCursor int64      `json:"workbookCursor"`
}
