package shared

type ListTablesResult struct {
	NextToken      *string `json:"nextToken"`
	Tables         []Table `json:"tables"`
	WorkbookCursor *int64  `json:"workbookCursor"`
}
