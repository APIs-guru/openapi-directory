package shared

type GetScreenDataResult struct {
	NextToken      *string              `json:"nextToken"`
	Results        map[string]ResultSet `json:"results"`
	WorkbookCursor int64                `json:"workbookCursor"`
}
