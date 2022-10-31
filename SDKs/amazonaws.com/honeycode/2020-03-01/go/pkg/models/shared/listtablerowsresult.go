package shared



type ListTableRowsResult struct {
    ColumnIds []string `json:"columnIds"`
    NextToken *string `json:"nextToken,omitempty"`
    RowIdsNotFound []string `json:"rowIdsNotFound,omitempty"`
    Rows []TableRow `json:"rows"`
    WorkbookCursor int64 `json:"workbookCursor"`
    
}

