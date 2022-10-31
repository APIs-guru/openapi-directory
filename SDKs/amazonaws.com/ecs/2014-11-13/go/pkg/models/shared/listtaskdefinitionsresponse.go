package shared



type ListTaskDefinitionsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    TaskDefinitionArns []string `json:"taskDefinitionArns,omitempty"`
    
}

