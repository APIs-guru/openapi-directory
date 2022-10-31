package shared



type ListSharedProjectsOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    Projects []string `json:"projects,omitempty"`
    
}

