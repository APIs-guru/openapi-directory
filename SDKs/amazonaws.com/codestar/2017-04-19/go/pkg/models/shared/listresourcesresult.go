package shared



type ListResourcesResult struct {
    NextToken *string `json:"nextToken,omitempty"`
    Resources []Resource `json:"resources,omitempty"`
    
}

