package shared



type ListProjectsResult struct {
    NextToken *string `json:"nextToken,omitempty"`
    Projects []Project `json:"projects,omitempty"`
    
}

