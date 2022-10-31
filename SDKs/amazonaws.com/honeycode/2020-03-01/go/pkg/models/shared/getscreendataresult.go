package shared

type GetScreenDataResult struct {
	NextToken      *string              `json:"nextToken,omitempty"`
	Results        map[string]ResultSet `json:"results"`
	WorkbookCursor int64                `json:"workbookCursor"`
}
