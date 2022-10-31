package shared



type GetChangeLogsResponse struct {
    ChangeLogs []ChangeLog `json:"changeLogs,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

