package shared

type ListTableColumnsResult struct {
	NextToken      *string       `json:"nextToken"`
	TableColumns   []TableColumn `json:"tableColumns"`
	WorkbookCursor *int64        `json:"workbookCursor"`
}
