package shared



type ListTagsForResourceOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

