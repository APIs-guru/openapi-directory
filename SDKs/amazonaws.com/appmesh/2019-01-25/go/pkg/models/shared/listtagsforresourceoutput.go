package shared



type ListTagsForResourceOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    Tags []TagRef `json:"tags"`
    
}

