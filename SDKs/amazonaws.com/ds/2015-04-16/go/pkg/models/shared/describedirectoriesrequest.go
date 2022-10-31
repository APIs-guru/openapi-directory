package shared



type DescribeDirectoriesRequest struct {
    DirectoryIds []string `json:"DirectoryIds,omitempty"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

