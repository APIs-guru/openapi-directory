package shared



type ListContainerInstancesResponse struct {
    ContainerInstanceArns []string `json:"containerInstanceArns,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

