package shared



type ListTablesResult struct {
    NextToken *string `json:"nextToken,omitempty"`
    Tables []Table `json:"tables"`
    WorkbookCursor *int64 `json:"workbookCursor,omitempty"`
    
}

