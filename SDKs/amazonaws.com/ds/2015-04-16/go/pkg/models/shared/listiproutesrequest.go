package shared



type ListIPRoutesRequest struct {
    DirectoryID string `json:"DirectoryId"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

