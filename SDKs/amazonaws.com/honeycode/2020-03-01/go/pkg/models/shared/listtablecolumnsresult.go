package shared

type ListTableColumnsResult struct {
	NextToken      *string       `json:"nextToken,omitempty"`
	TableColumns   []TableColumn `json:"tableColumns"`
	WorkbookCursor *int64        `json:"workbookCursor,omitempty"`
}
