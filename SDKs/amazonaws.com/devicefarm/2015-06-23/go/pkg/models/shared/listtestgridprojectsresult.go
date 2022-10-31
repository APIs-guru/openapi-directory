package shared



type ListTestGridProjectsResult struct {
    NextToken *string `json:"nextToken,omitempty"`
    TestGridProjects []TestGridProject `json:"testGridProjects,omitempty"`
    
}

