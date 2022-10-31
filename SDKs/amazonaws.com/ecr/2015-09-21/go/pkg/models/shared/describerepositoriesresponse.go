package shared



type DescribeRepositoriesResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Repositories []Repository `json:"repositories,omitempty"`
    
}

