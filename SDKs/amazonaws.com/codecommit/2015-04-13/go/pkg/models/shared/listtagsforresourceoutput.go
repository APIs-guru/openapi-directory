package shared



type ListTagsForResourceOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

