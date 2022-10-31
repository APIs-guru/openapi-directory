package shared



type ListTagsForResourceOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

