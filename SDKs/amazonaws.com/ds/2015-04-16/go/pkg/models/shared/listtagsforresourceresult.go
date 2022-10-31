package shared



type ListTagsForResourceResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

