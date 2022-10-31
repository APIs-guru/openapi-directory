package shared



type ListMlTransformsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    TransformIds []string `json:"TransformIds"`
    
}

